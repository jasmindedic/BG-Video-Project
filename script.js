"use strict";

let toggleBtn = document.querySelector(".toggle-button");
let logo = document.querySelector(".logo-container");
let navbar = document.querySelector("ul")

// Add event listener to toggle button to show navigation bar
toggleBtn.addEventListener("click", () => {
    logo.classList.toggle("active");
    navbar.classList.toggle("active");
})