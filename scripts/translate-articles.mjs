// Batch-translate the 193 EN article titles/meta descriptions into es/ru/ar/pt
// using the app's keyless LLM channel. Checkpointed per article (resume-safe).
import fs from "node:fs";
import { createWorkBuddyCloud } from "@tencent-ai/workbuddy-cloud-sdk";

const SRC = "D:/csv/lm/en-article-meta.json";
const OUT = "D:/csv/lm/article-translations.json";
const LANGS = ["es", "ru", "ar", "pt"];
const CONCURRENCY = 6;
const MODEL = "glm-5.2";

const cloud = createWorkBuddyCloud({
  endpoint: "https://lmcakecup-i18n.app.workbuddy.host",
  publishableKey: "wbpk_4DhzPa3YppWq0hZ3RnU9hA_SLBCGcyi0k6a7NsXbrun0lRJgHTt8wAr",
});

const articles = JSON.parse(fs.readFileSync(SRC, "utf8"));
const done = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, "utf8")) : {};
const pending = articles.filter((a) => !done[a.route]);
console.log(`total=${articles.length} done=${Object.keys(done).length} pending=${pending.length}`);

const SYSTEM = `You are a professional B2B SEO translator for a food-packaging paper manufacturer's website. You translate English SEO titles and meta descriptions into Spanish (es), Russian (ru), Arabic (ar) and Portuguese (pt) for B2B wholesale buyers (importers, distributors, bakery and food-service purchasing managers).

Rules:
1. Translate faithfully - NEVER add facts, claims, certifications, numbers or promises that are not in the English source.
2. Title: max 60 characters. Meta description: 130-160 characters. Adapt, do not pad.
3. Keep the brand name "LANGMAI" unchanged. Keep product terms natural for the target market's packaging industry (e.g. es "papel de horno", "papel pergamino"; ru "пергаментная бумага"; ar "ورق الخبز"; pt "papel de forno").
4. No language mixing: the pt output must contain no Spanish borrowings, the es output no Portuguese ones.
5. Use the target language's standard B2B register (Spanish: usted; Portuguese: formal; Russian: professional; Arabic: MSA).
6. Do not end titles with a period. Meta descriptions are one or two complete sentences.
7. Reply with JSON ONLY, no markdown fences, exactly this shape:
{"es":{"title":"...","meta":"..."},"ru":{...},"ar":{...},"pt":{...}}`;

function parseReply(text) {
  const cleaned = text.replace(/^```(?:json)?/m, "").replace(/```\s*$/m, "").trim();
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  const data = JSON.parse(cleaned.slice(start, end + 1));
  for (const lang of LANGS) {
    const entry = data[lang];
    if (!entry || typeof entry.title !== "string" || typeof entry.meta !== "string") {
      throw new Error(`missing ${lang} fields`);
    }
    if (!entry.title.trim() || !entry.meta.trim()) throw new Error(`empty ${lang} fields`);
  }
  return data;
}

async function translateOne(article) {
  const user = `English SEO title: ${article.title}
English meta description: ${article.meta}

Translate this title and meta description into es, ru, ar and pt.`;

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      let answer = "";
      for await (const chunk of cloud.llm.chat.completions.create({
        model: MODEL,
        messages: [
          { role: "system", content: SYSTEM },
          { role: "user", content: user },
        ],
        stream: true,
        response_format: { type: "json_object" },
        temperature: 0.3,
      })) {
        if (chunk.choices[0]?.delta?.content) answer += chunk.choices[0].delta.content;
      }
      const data = parseReply(answer);
      return data;
    } catch (err) {
      console.error(`  retry ${attempt} ${article.route}: ${String(err.message || err).slice(0, 120)}`);
      if (attempt === 3) return null;
      await new Promise((r) => setTimeout(r, 2000 * attempt));
    }
  }
}

let index = 0;
let completed = 0;
let failed = 0;
async function worker() {
  while (true) {
    const i = index++;
    if (i >= pending.length) return;
    const article = pending[i];
    const data = await translateOne(article);
    if (data) {
      done[article.route] = data;
      completed++;
    } else {
      failed++;
      done[article.route] = null; // mark attempted-but-failed so resumes skip it
    }
    if ((completed + failed) % 5 === 0 || completed + failed === pending.length) {
      fs.writeFileSync(OUT, JSON.stringify(done, null, 1));
      console.log(`progress: ${completed + failed}/${pending.length} (failed=${failed})`);
    }
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, worker));
fs.writeFileSync(OUT, JSON.stringify(done, null, 1));
console.log(`DONE completed=${completed} failed=${failed}`);
