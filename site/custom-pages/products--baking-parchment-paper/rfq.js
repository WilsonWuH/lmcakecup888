// Extracted from the inline <script> of this page (2026-10-07) so the site can
// serve a strict Content-Security-Policy (script-src 'self').
(function () {
  var toggle = document.querySelector("[data-menu-toggle]");
  if (toggle) {
    var target = document.getElementById(toggle.getAttribute("data-menu-toggle"));
    if (target) {
      toggle.addEventListener("click", function () {
        var open = target.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(open));
      });
    }
  }
})();
document.getElementById('f-artwork').addEventListener('change', function(){
  document.getElementById('f-artwork-name').textContent = this.files.length ? this.files[0].name : 'PDF, AI, EPS, PNG or JPG';
});
(function(){
  var form = document.getElementById('rfq-form');
  var status = document.getElementById('rfq-status');
  var MAX_BYTES = 3 * 1024 * 1024;
  function toBase64(file){
    return new Promise(function(resolve, reject){
      var reader = new FileReader();
      reader.onload = function(){ resolve(String(reader.result).split(',').pop() || ''); };
      reader.onerror = function(){ reject(new Error('read failed')); };
      reader.readAsDataURL(file);
    });
  }
  form.addEventListener('submit', function(e){
    e.preventDefault();
    if (form.querySelector('[name="_honey"]').value !== '') { return; }
    if (!form.checkValidity()) { form.reportValidity(); return; }
    var btn = document.getElementById('rfq-submit');
    var fileInput = document.getElementById('f-artwork');
    var file = fileInput.files.length ? fileInput.files[0] : null;
    var data = {};
    new FormData(form).forEach(function(v, k){ if (typeof v === 'string') data[k] = v; });
    data.subject = 'New LANGMAI parchment paper RFQ';
    data.page = location.href;
    if (file && file.size > MAX_BYTES) {
      status.textContent = 'Artwork file is larger than 3 MB. Please email it to wilson@lmcakecup.com, or submit without the attachment.';
      status.className = 'rfq-status err';
      return;
    }
    btn.disabled = true; btn.textContent = 'Sending…';
    status.textContent = 'Sending your inquiry…';
    status.className = 'rfq-status';
    var ready = file
      ? toBase64(file).then(function(b64){ data.attachment = { name: file.name, mimeType: file.type || 'application/octet-stream', content: b64 }; })
      : Promise.resolve();
    ready.then(function(){
      return fetch('/api/inquiry/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      }).then(function(r){
        return r.json().catch(function(){ return {}; }).then(function(j){ return { ok: r.ok, j: j }; });
      });
    }).then(function(res){
      if (res.ok && res.j && res.j.success === true) {
        status.textContent = 'Thank you. Your inquiry has been sent to our sales inbox.';
        status.className = 'rfq-status ok';
        form.reset();
        document.getElementById('f-artwork-name').textContent = 'PDF, AI, EPS, PNG or JPG';
      } else {
        throw new Error((res.j && res.j.message) || 'Delivery failed');
      }
    }).catch(function(){
      status.textContent = 'Something went wrong. Please email wilson@lmcakecup.com or message us on WhatsApp.';
      status.className = 'rfq-status err';
    }).then(function(){
      btn.disabled = false; btn.textContent = 'Get My Custom Quote';
    });
  });
})();
