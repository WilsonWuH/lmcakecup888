
document.querySelectorAll("[data-lead-form]").forEach((form)=>{
  form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({event:"lead_form_submit",product:data.product,country:data.country,quantity:data.quantity});
    const note = form.querySelector("[data-form-note]");
    note.textContent = "Inquiry captured. Connect this form to email, CRM or marketing automation before launch.";
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
      await new Promise((resolve)=>setTimeout(resolve, 650));
      status.textContent = "Submitted successfully. Please connect /api/inquiry to email, CRM or database before launch.";
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
