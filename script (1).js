// Select menu button and navigation bar

const menuButton = document.getElementById("menu-btn");

const navbar = document.getElementById("navbar");


// Open and close mobile menu

menuButton.addEventListener("click", function () {

    navbar.classList.toggle("active");

});


// Close menu when a navigation link is clicked

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

    });

});