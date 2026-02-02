const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
}

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("leadForm");
const statusEl = document.getElementById("status");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    const subject = encodeURIComponent("New Roofing Enquiry");
    const body = encodeURIComponent(
      `Name: ${payload.name}\nPhone: ${payload.phone}\nEmail: ${payload.email}\nPostcode: ${payload.postcode}\nService: ${payload.service}\n\nMessage:\n${payload.message || ""}`
    );

    window.location.href = `mailto:info@yourdomain.co.uk?subject=${subject}&body=${body}`;
    if (statusEl) statusEl.textContent = "Opening your email app…";
  });
}
.areas{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:12px;
  margin-top:14px;
}

.galleryPro{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:12px;
}

.shot{
  margin:0;
  border:1px solid var(--line);
  border-radius:16px;
  overflow:hidden;
  background:rgba(255,255,255,.04);
  box-shadow:0 10px 24px rgba(0,0,0,.18);
}

.shot img{
  width:100%;
  height:240px;
  object-fit:cover;
  display:block;
}

.shot figcaption{
  padding:12px 14px;
  color:var(--muted);
  font-size:13px;
}

@media (max-width:980px){
  .areas{grid-template-columns:repeat(2,1fr)}
  .galleryPro{grid-template-columns:1fr}
  .shot img{height:220px}
}
