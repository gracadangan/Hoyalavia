// ========================================
// MOBILE MENU
// ========================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


// ========================================
// TUTUP MENU SETELAH LINK DIKLIK
// ========================================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });

});


// ========================================
// COPYRIGHT YEAR OTOMATIS
// ========================================

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();


// ========================================
// HEADER EFFECT SAAT SCROLL
// ========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 8px 30px rgba(0, 0, 0, 0.06)";

    } else {

        header.style.boxShadow = "none";

    }

});