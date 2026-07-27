/* =========================================
   ELEMENTS
========================================= */

const cursorFollower = document.querySelector(".cursor-follower");

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileClose = document.getElementById("mobileClose");

const mobileLinks = document.querySelectorAll(".mobile-nav a");

const heroCards = document.querySelector(".hero-cards");

const currentYear = document.getElementById("currentYear");


/* =========================================
   CURRENT YEAR
========================================= */

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* =========================================
   CUSTOM CURSOR
========================================= */

const supportsHover = window.matchMedia("(hover: hover)").matches;

if (supportsHover && cursorFollower) {

    let mouseX = 0;
    let mouseY = 0;

    let cursorX = 0;
    let cursorY = 0;


    document.addEventListener("mousemove", (event) => {

        mouseX = event.clientX;
        mouseY = event.clientY;

    });


    function animateCursor() {

        cursorX += (mouseX - cursorX) * 0.18;
        cursorY += (mouseY - cursorY) * 0.18;

        cursorFollower.style.left = `${cursorX}px`;
        cursorFollower.style.top = `${cursorY}px`;

        requestAnimationFrame(animateCursor);
    }

    animateCursor();


    const interactiveElements = document.querySelectorAll(
        "a, button, .service-item, .project, .process-card"
    );

    interactiveElements.forEach((element) => {

        element.addEventListener("mouseenter", () => {
            cursorFollower.classList.add("active");
        });

        element.addEventListener("mouseleave", () => {
            cursorFollower.classList.remove("active");
        });

    });


    document.addEventListener("mousedown", () => {
        cursorFollower.classList.add("active");
    });

    document.addEventListener("mouseup", () => {
        cursorFollower.classList.remove("active");
    });
}


/* =========================================
   MOBILE MENU
========================================= */

function openMenu() {

    if (!mobileMenu) return;

    mobileMenu.classList.add("open");

    document.body.classList.add("menu-open");

    menuBtn?.setAttribute("aria-expanded", "true");
}


function closeMenu() {

    if (!mobileMenu) return;

    mobileMenu.classList.remove("open");

    document.body.classList.remove("menu-open");

    menuBtn?.setAttribute("aria-expanded", "false");
}


menuBtn?.addEventListener("click", openMenu);

mobileClose?.addEventListener("click", closeMenu);


mobileLinks.forEach((link) => {

    link.addEventListener("click", closeMenu);

});


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeMenu();
    }

});


/* =========================================
   HERO CARD PARALLAX
========================================= */

if (supportsHover && heroCards) {

    const cards = heroCards.querySelectorAll(".image-card");


    heroCards.addEventListener("mousemove", (event) => {

        const rect = heroCards.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) / rect.width - 0.5;

        const y =
            (event.clientY - rect.top) / rect.height - 0.5;


        cards.forEach((card, index) => {

            const intensity = (index + 1) * 2;

            card.style.marginLeft =
                `${x * intensity}px`;

            card.style.marginTop =
                `${y * intensity}px`;

        });

    });


    heroCards.addEventListener("mouseleave", () => {

        cards.forEach((card) => {

            card.style.marginLeft = "0px";
            card.style.marginTop = "0px";

        });

    });
}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".about-content, .service-item, .project, .process-card"
);


if ("IntersectionObserver" in window) {

    revealElements.forEach((element) => {

        element.style.opacity = "0";
        element.style.transform = "translateY(35px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

    });


    const revealObserver = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) return;

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            });

        },

        {
            threshold: 0.12
        }

    );


    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });

}


/* =========================================
   CLOSE MENU ON RESIZE
========================================= */

window.addEventListener("resize", () => {

    if (window.innerWidth > 700) {
        closeMenu();
    }

});