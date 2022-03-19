// mobile menu
const burgerIcon = document.querySelector(".navbar-burger");
const navbarMenu = document.querySelector("#tech-blog-nav");

burgerIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
});
