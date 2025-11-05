const menubar = document.getElementById("menubar");
const nav = document.getElementById("navitems");
menubar.addEventListener("click", () => {
  nav.classList.toggle("hidden");
  nav.classList.toggle("block");
});
