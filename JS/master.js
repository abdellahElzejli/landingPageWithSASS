const navbarToggler =  document.querySelector(".navbar_top--toggler");
const navbarCollapse =  document.querySelector(".navbar_collapse");

navbarToggler.addEventListener("click", () => {
    navbarToggler.classList.toggle("change");
    navbarCollapse.classList.toggle("show-nav");
});