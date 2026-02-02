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
