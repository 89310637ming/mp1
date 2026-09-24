// Adapted from the Portfolio Assignment Guide for the Webpack starter.
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function updateNavigation() {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
  let currentSection = sections[0].id;
  const navBottom = navbar.getBoundingClientRect().bottom;

  sections.forEach(function (section) {
    if (section.getBoundingClientRect().top <= navBottom + 10) {
      currentSection = section.id;
    }
  });

  // The last section may be too short to reach the top of the viewport.
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight - 2
  ) {
    currentSection = sections[sections.length - 1].id;
  }

  navLinks.forEach(function (link) {
    const active = link.getAttribute("href") === "#" + currentSection;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}

navLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({
      behavior: reduceMotion.matches ? "auto" : "smooth",
    });
  });
});

window.addEventListener("scroll", updateNavigation, { passive: true });
window.addEventListener("resize", updateNavigation);
window.addEventListener("load", updateNavigation);
navbar.addEventListener("transitionend", updateNavigation);
updateNavigation();

// The guide supplied the carousel markup; these handlers make its arrows work.
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach(function (slide, i) {
    slide.hidden = i !== currentSlide;
    slide.classList.toggle("active-slide", i === currentSlide);
    slide.setAttribute(
      "aria-label",
      "Project " + (i + 1) + " of " + slides.length
    );
  });
}
document.getElementById("prevButton").addEventListener("click", function () {
  showSlide(currentSlide - 1);
});
document.getElementById("nextButton").addEventListener("click", function () {
  showSlide(currentSlide + 1);
});
showSlide(0);

const modal = document.getElementById("contactModal");
const openModal = document.getElementById("openModal");
openModal.addEventListener("click", function () {
  modal.showModal();
  document.body.classList.add("modal-open");
});
document.getElementById("closeModal").addEventListener("click", function () {
  modal.close();
});
modal.addEventListener("click", function (event) {
  const bounds = modal.getBoundingClientRect();
  if (
    event.target === modal &&
    (event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom)
  )
    modal.close();
});
modal.addEventListener("close", function () {
  document.body.classList.remove("modal-open");
  openModal.focus();
});
