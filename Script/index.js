// mobile screen menubar fuction
const menubar = document.getElementById("menubar");
const nav = document.getElementById("navitems");
menubar.addEventListener("click", () => {
  nav.classList.toggle("hidden");
  nav.classList.toggle("block");
});

// goto to top button
const goToTopBtn = document.getElementById("goToTop");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 200) {
    goToTopBtn.classList.remove("opacity-0", "invisible");
    goToTopBtn.classList.add("opacity-100", "visible");
  } else {
    goToTopBtn.classList.remove("opacity-100", "visible");
    goToTopBtn.classList.add("opacity-0", "invisible");
  }
});

goToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
