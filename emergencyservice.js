// TOGGLE BUTTON

let menubtn = document.getElementById("menubtn");
let navbar = document.getElementById("navbar");

menubtn.addEventListener("click", function () {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menubtn.textContent = "✕";
    } else {
        menubtn.textContent = "☰";
    }
});

let navLinks = navbar.querySelectorAll("a");
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("active");
        menubtn.textContent = "☰";
    });
});