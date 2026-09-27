"use strict";

/**
 * LANGMAI inquiry endpoint -> Zoho ZeptoMail
 *
 * Required Vercel env vars:
 *   ZEPTOMAIL_TOKEN   Send Mail Token from Zoho ZeptoMail (Mail Agents -> Email API)
 * Optional:
 *   ZEPTOMAIL_API_URL default https://api.zeptomail.com/v1.1/email
 *                     use https://api.zeptomail.eu/v1.1/email  (EU DC)
 *                         https://api.zeptomail.in/v1.1/email  (IN DC)
 *                         https://api.zeptomail.com.cn/v1.1/email (CN DC)
 *   ZEPTOMAIL_FROM      default website@lmcakecup.com (must be verified in ZeptoMail)
 *   ZEPTOMAIL_FROM_NAME default LANGMAI Website
 *   ZEPTOMAIL_TO        default wilson@lmcakecup.com
 *   ZEPTOMAIL_CC        comma separated, optional
 *   ZEPTOMAIL_AUTOREPLY set to "0" to disable the confirmation email sent to the visitor
 *                       (enabled by default, failure to send it never fails the inquiry)
 */

const API_URL = process.env.ZEPTOMAIL_API_URL || "https://api.zeptomail.com/v1.1/email";
const FROM_ADDRESS = process.env.ZEPTOMAIL_FROM || "website@lmcakecup.com";
const FROM_NAME = process.env.ZEPTOMAIL_FROM_NAME || "LANGMAI Website";
const TO = (process.env.ZEPTOMAIL_TO || "wilson@lmcakecup.com")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);
const CC = (process.env.ZEPTOMAIL_CC || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const ALLOWED_HOSTS = new Set([
  "www.lmcakecup.com",
  "lmcakecup.com",
  "lmcakecup888.vercel.app",
  "lmcakecup-git-main-wilson-s-projects88.vercel.app",
  "localhost",
  "127.0.0.1",
]);

const SKIP_KEYS = new Set([
  "_subject",
  "_template",
  "_replyto",
  "_next",
  "_captcha",
  "_honey",
  "website",
  "honeypot",
  "attachment",
]);

// Vercel caps request bodies at 4.5 MB, base64 inflates by ~33%, so keep raw files <= 3 MB.
const MAX_ATTACHMENT_B64 = 4_200_000;
const ATTACHMENT_EXT = /\.(pdf|ai|eps|png|jpe?g|svg|zip)$/i;

const MAX_FIELD = 4000;
const MAX_FIELDS = 60;
const RATE_LIMIT = { windowMs: 60 * 1000, max: 6 };
const hits = new Map();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[c]);
}

function hostOf(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return "";
  }
}

function requestHost(req) {
  const origin = req.headers.origin || req.headers.referer || "";
  return hostOf(origin);
}

function readBody(req) {
  const body = req.body;
  if (!body) return {};
  if (typeof body === "object") return body;
  if (typeof body === "string") {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }
  return {};
}

function rateLimited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < RATE_LIMIT.windowMs);
  if (list.length >= RATE_LIMIT.max) {
    hits.set(ip, list);
    return true;
  }
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) hits.clear();
  return false;
}

function clientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length) return forwarded.split(",")[0].trim();
  return req.socket?.remoteAddress || "unknown";
}

function prettyLabel(key) {
  return key
    .replace(/[_-]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^./, (c) => c.toUpperCase());
}

function buildPayload(data, page) {
  const entries = Object.entries(data)
    .filter(([k]) => !SKIP_KEYS.has(k))
    .filter(([, v]) => v !== "" && v !== null && v !== undefined)
    .slice(0, MAX_FIELDS)
    .map(([k, v]) => [prettyLabel(k), String(v).slice(0, MAX_FIELD)]);

  const rows = entries
    .map(
      ([k, v]) =>
        `<tr><th style="text-align:left;padding:8px 12px;background:#f6f1e7;border-bottom:1px solid #e8dfcf;width:200px;font-weight:600">${esc(
          k
        )}</th><td style="padding:8px 12px;border-bottom:1px solid #e8dfcf;white-space:pre-wrap">${esc(v)}</td></tr>`
    )
    .join("");

  const text = entries.map(([k, v]) => `${k}: ${v}`).join("\n");

  const html = `<div style="font-family:Arial,Helvetica,sans-serif;color:#2b2620;font-size:14px;line-height:1.6">
  <h2 style="margin:0 0 12px;font-size:18px">New website inquiry</h2>
  <table style="border-collapse:collapse;width:100%;max-width:720px">${rows}</table>
  ${page ? `<p style="margin:16px 0 0"><strong>Submitted on page:</strong> <a href="${esc(page)}">${esc(page)}</a></p>` : ""}
  <p style="margin:8px 0 0;color:#8a8074;font-size:12px">Sent from lmcakecup.com inquiry form via Zoho ZeptoMail.</p>
</div>`;

  return { html, text: `${text}${page ? `\n\nSubmitted on page: ${page}` : ""}`, rows, entries };
}

function buildAutoReply(name, rows, entries) {
  const greeting = name ? `Hi ${esc(name)},` : "Hi there,";
  const summary = entries.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `<div style="font-family:Arial,Helvetica,sans-serif;color:#2b2620;font-size:14px;line-height:1.6">
  <p style="margin:0 0 12px">${greeting}</p>
  <p style="margin:0 0 12px">Thank you for contacting LANGMAI. This is an automatic confirmation that your inquiry has reached our sales team. <strong>Wilson will reply personally, usually within 24 hours on working days (China time).</strong></p>
  <p style="margin:16px 0 8px"><strong>What you sent us:</strong></p>
  <table style="border-collapse:collapse;width:100%;max-width:720px">${rows}</table>
  <p style="margin:16px 0 8px">If your enquiry is urgent, or you want to add artwork, sizes or target quantities, reach us directly:</p>
  <ul style="margin:0;padding-left:18px">
    <li>Email: wilson@lmcakecup.com</li>
    <li>WhatsApp: +86 136 4570 0210</li>
  </ul>
  <p style="margin:20px 0 0">Best regards,<br><strong>Wilson</strong><br>LANGMAI · Jinhua Langmai Daily-Using Co., Ltd.<br>Baking paper &amp; food paper packaging manufacturer since 2006</p>
</div>`;

  const text = `${name ? `Hi ${name},` : "Hi there,"}

Thank you for contacting LANGMAI. This is an automatic confirmation that your inquiry has reached our sales team. Wilson will reply personally, usually within 24 hours on working days (China time).

What you sent us:
${summary}

Urgent? Reach us directly:
Email: wilson@lmcakecup.com
WhatsApp: +86 136 4570 0210

Best regards,
Wilson
LANGMAI - Jinhua Langmai Daily-Using Co., Ltd.`;

  return { html, text };
}

async function sendMail(payload) {
  const token = process.env.ZEPTOMAIL_TOKEN;
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Zoho-enczapikey ${token}`,
    },
    body: JSON.stringify(payload),
  });
  const raw = await response.text();
  if (!response.ok) {
    console.error("zeptomail_error", response.status, raw.slice(0, 500));
    return { ok: false };
  }
  return { ok: true };
}

function recipients(list) {
  return list.map((address) => ({ email_address: { address, name: address.split("@")[0] } }));
}

function parseAttachment(raw) {
  if (!raw || typeof raw !== "object") return null;
  const content = typeof raw.content === "string" ? raw.content : "";
  const name = String(raw.name || "").replace(/[^A-Za-z0-9._-]/g, "_").slice(0, 180);
  const mimeType = String(raw.mimeType || raw.mime_type || "application/octet-stream").slice(0, 120);
  if (!name || !content) return null;
  if (!ATTACHMENT_EXT.test(name)) return null;
  if (content.length > MAX_ATTACHMENT_B64) return null;
  if (!/^[A-Za-z0-9+/=\s]+$/.test(content)) return null;
  return { name, mime_type: mimeType, content };
}

module.exports = async function handler(req, res) {
  const host = requestHost(req);
  const allowedOrigin = ALLOWED_HOSTS.has(host) ? (req.headers.origin || "*") : null;

  if (allowedOrigin) {
    res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Vary", "Origin");
  }

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ success: false, message: "Method not allowed" });
    return;
  }

  // Block obvious cross-site abuse: if an origin/referer header is present it must be ours.
  if ((req.headers.origin || req.headers.referer) && !allowedOrigin) {
    res.status(403).json({ success: false, message: "Origin not allowed" });
    return;
  }

  if (rateLimited(clientIp(req))) {
    res.status(429).json({ success: false, message: "Too many submissions. Please try again shortly." });
    return;
  }

  const token = process.env.ZEPTOMAIL_TOKEN;
  if (!token) {
    res.status(503).json({ success: false, message: "Mail service is not configured yet." });
    return;
  }

  const data = readBody(req);
  const email = typeof data.email === "string" ? data.email.trim() : "";
  if (!email || !EMAIL_RE.test(email)) {
    res.status(400).json({ success: false, message: "A valid email address is required." });
    return;
  }

  const page = typeof data.page === "string" && hostOf(data.page) ? data.page.slice(0, 500) : "";
  const subject = typeof data.subject === "string" && data.subject.trim()
    ? data.subject.trim().slice(0, 200)
    : "New LANGMAI website inquiry";
  const name = typeof data.name === "string" ? data.name.trim().slice(0, 120) : "";

  const { html, text, rows, entries } = buildPayload(data, page);

  const payload = {
    from: { address: FROM_ADDRESS, name: FROM_NAME },
    to: recipients(TO),
    subject,
    htmlbody: html,
    textbody: text,
    reply_to: [{ address: email, name: name || email }],
  };
  if (CC.length) payload.cc = recipients(CC);

  const attachment = parseAttachment(data.attachment);
  if (attachment) payload.attachments = [attachment];

  try {
    const sent = await sendMail(payload);
    if (!sent.ok) {
      res.status(502).json({ success: false, message: "Mail provider rejected the message." });
      return;
    }

    console.log("inquiry_sent", { to: TO[0], subject, page });

    const autoReply = (process.env.ZEPTOMAIL_AUTOREPLY || "1") !== "0";
    if (autoReply) {
      const confirmation = buildAutoReply(name, rows, entries);
      const replySent = await sendMail({
        from: { address: FROM_ADDRESS, name: FROM_NAME },
        to: [{ email_address: { address: email, name: name || email } }],
        subject: "We received your inquiry - LANGMAI",
        htmlbody: confirmation.html,
        textbody: confirmation.text,
        reply_to: [{ address: TO[0], name: FROM_NAME }],
      }).catch(() => ({ ok: false }));
      console.log("autoreply", replySent.ok ? `sent to ${email}` : `failed for ${email}`);
    }

    res.status(200).json({ success: true, message: "Inquiry sent." });
  } catch (error) {
    console.error("inquiry_failed", String(error));
    res.status(502).json({ success: false, message: "Could not reach the mail provider." });
  }
};
