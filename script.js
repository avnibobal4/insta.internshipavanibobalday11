/* =====================================
   ShopNest - script.js
   Main JavaScript File
===================================== */

// Mobile Menu

const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuButton){

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}

// Newsletter

const subscribeButton = document.querySelector(".newsletter button");
const emailInput = document.querySelector(".newsletter input");

if(subscribeButton){

    subscribeButton.addEventListener("click", () => {

        const email = emailInput.value.trim();

        if(email === ""){

            alert("Please enter your email.");

            return;

        }

        alert("Thank you for subscribing!");

        emailInput.value = "";

    });

}

// Product Buttons

const cartButtons = document.querySelectorAll(".product-card button");

cartButtons.forEach((button) => {

    button.addEventListener("click", () => {

        button.innerHTML = "✔ Added";

        button.style.background = "#16a34a";

        setTimeout(() => {

            button.innerHTML = "Add to Cart";

            button.style.background = "";

        },1500);

    });

});

// Smooth Scroll

document.querySelectorAll("a[href^='#']").forEach((link)=>{

    link.addEventListener("click",(event)=>{

        event.preventDefault();

        const section=document.querySelector(link.getAttribute("href"));

        if(section){

            section.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// Scroll Animation

const cards = document.querySelectorAll(".product-card,.category-card,.service-card");

window.addEventListener("scroll",()=>{

    cards.forEach((card)=>{

        const top = card.getBoundingClientRect().top;

        const screen = window.innerHeight;

        if(top < screen-100){

            card.classList.add("active");

        }

    });

});

// Current Year Footer

const copy = document.querySelector(".copyright");

if(copy){

    const year = new Date().getFullYear();

    copy.innerHTML = "© " + year + " ShopNest. All Rights Reserved.";

}