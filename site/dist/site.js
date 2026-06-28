
document.querySelectorAll("[data-lead-form]").forEach((form)=>{
  form.addEventListener("submit", async (event)=>{
    event.preventDefault();
    const note = form.querySelector("[data-form-note]");
    const button = form.querySelector("button[type='submit']");
    if (form.website?.value) {
      note.textContent = "Submission blocked by spam protection.";
      return;
    }
    if (!form.checkValidity()) {
      form.reportValidity();
      note.textContent = "Please complete all required fields correctly.";
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({event:"lead_form_submit",product:data.product,country:data.country,quantity:data.quantity});
    button.disabled = true;
    button.textContent = "Sending...";
    note.textContent = "Sending your inquiry securely...";
    try {
      const response = await fetch("https://formsubmit.co/ajax/wh1007209170@gmail.com", {
        method: "POST",
        headers: {"Content-Type":"application/json","Accept":"application/json"},
        body: JSON.stringify({...data, _subject:"New LANGMAI product inquiry", _template:"table", _replyto:data.email, page:window.location.href})
      });
      const result = await response.json();
      if (!response.ok || String(result.success).toLowerCase() !== "true") throw new Error(result.message || "Delivery failed");
      note.textContent = "Thank you. Your inquiry has been sent to Wilson's sales inbox.";
      button.textContent = "Sent";
      form.reset();
    } catch (error) {
      note.textContent = "We could not send your inquiry. Please email wh1007209170@gmail.com or contact us on WhatsApp.";
      button.textContent = "Try Again";
    } finally {
      setTimeout(()=>{button.disabled=false;button.textContent="Send Inquiry";},1800);
    }
  });
});

document.querySelectorAll("[data-inquiry-form]").forEach((form)=>{
  const status = form.querySelector("[data-inquiry-status]");
  const button = form.querySelector("button[type='submit']");
  const showError = (field, message) => {
    const label = field.closest("label");
    if (!label) return;
    label.classList.add("invalid");
    const small = label.querySelector("small");
    if (small) small.textContent = message;
  };
  const clearErrors = () => {
    form.querySelectorAll(".invalid").forEach((item)=>item.classList.remove("invalid"));
    form.querySelectorAll("small").forEach((item)=>item.textContent = "");
  };
  form.querySelectorAll("input, textarea").forEach((field)=>{
    field.addEventListener("input",()=> {
      const label = field.closest("label");
      if (label) label.classList.remove("invalid");
      const small = label?.querySelector("small");
      if (small) small.textContent = "";
    });
  });
  form.addEventListener("submit", async (event)=>{
    event.preventDefault();
    clearErrors();
    status.className = "inquiry-status";
    if (form.website?.value) {
      status.textContent = "Submission blocked by spam protection.";
      status.classList.add("error");
      return;
    }
    const required = Array.from(form.querySelectorAll("[required]"));
    const invalid = required.filter((field)=>!field.checkValidity());
    if (invalid.length) {
      invalid.forEach((field)=>showError(field, field.dataset.error || "Please complete this field."));
      status.textContent = "Please complete all required fields before submitting.";
      status.classList.add("error");
      invalid[0].focus();
      return;
    }
    button.disabled = true;
    button.textContent = "Submitting...";
    const data = Object.fromEntries(new FormData(form).entries());
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({event:"b2b_inquiry_submit",product:data.product,country:data.country});
    try {
      const response = await fetch("https://formsubmit.co/ajax/wh1007209170@gmail.com", {
        method: "POST",
        headers: {"Content-Type":"application/json","Accept":"application/json"},
        body: JSON.stringify({...data, _subject:"New LANGMAI B2B inquiry", _template:"table", _replyto:data.email, page:window.location.href})
      });
      const result = await response.json();
      if (!response.ok || String(result.success).toLowerCase() !== "true") throw new Error(result.message || "Delivery failed");
      status.textContent = "Submitted successfully. Your inquiry has been sent to Wilson's sales inbox.";
      status.classList.add("success");
      button.textContent = "Submitted";
      form.reset();
    } catch (error) {
      status.textContent = "Submit failed. Please email us directly or try again.";
      status.classList.add("error");
      button.disabled = false;
      button.textContent = button.dataset.submitText || "Submit Inquiry";
    }
    setTimeout(()=>{
      button.disabled = false;
      button.textContent = button.dataset.submitText || "Submit Inquiry";
    }, 1400);
  });
});
