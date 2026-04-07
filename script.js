const header = document.getElementById("site-header");
const reveals = document.querySelectorAll(".reveal");

let lastScrollY = window.scrollY;

function handleHeader() {
  const currentScrollY = window.scrollY;

  if (currentScrollY > 80) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }

  if (currentScrollY > lastScrollY && currentScrollY > 120) {
    header.classList.add("header-hidden");
  } else {
    header.classList.remove("header-hidden");
  }

  lastScrollY = currentScrollY;
}

function revealOnScroll() {
  const trigger = window.innerHeight * 0.88;

  reveals.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < trigger && rect.bottom > 0;

    if (isVisible) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", () => {
  handleHeader();
  revealOnScroll();
});

window.addEventListener("load", () => {
  handleHeader();
  revealOnScroll();
});