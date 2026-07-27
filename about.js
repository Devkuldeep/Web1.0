/* =========================================
   ABOUT PAGE ANIMATIONS
========================================= */


/* =========================================
   NUMBER COUNTER
========================================= */

const statNumbers = document.querySelectorAll(
    ".stat-number[data-target]"
);

const animateCounter = (element) => {

    const target = Number(
        element.dataset.target
    );

    const duration = 1400;

    const startTime = performance.now();


    function updateCounter(currentTime) {

        const elapsed =
            currentTime - startTime;

        const progress =
            Math.min(elapsed / duration, 1);


        /*
         * Ease out cubic
         */

        const easedProgress =
            1 - Math.pow(1 - progress, 3);


        const currentValue =
            Math.floor(
                easedProgress * target
            );


        element.textContent =
            currentValue;


        if (progress < 1) {

            requestAnimationFrame(
                updateCounter
            );

        } else {

            element.textContent =
                target;

        }

    }


    requestAnimationFrame(
        updateCounter
    );

};


/* =========================================
   COUNTER OBSERVER
========================================= */

if ("IntersectionObserver" in window) {

    const counterObserver =
        new IntersectionObserver(

            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    animateCounter(
                        entry.target
                    );

                    observer.unobserve(
                        entry.target
                    );

                });

            },

            {
                threshold: 0.6
            }

        );


    statNumbers.forEach((number) => {

        counterObserver.observe(
            number
        );

    });

}


/* =========================================
   ABOUT REVEAL ANIMATION
========================================= */

const aboutRevealElements =
    document.querySelectorAll(

        `
        .story-intro,
        .story-copy,
        .value-card,
        .stat,
        .founder-image,
        .founder-content
        `

    );


if (
    "IntersectionObserver" in window &&
    !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches
) {

    aboutRevealElements.forEach(
        (element) => {

            element.style.opacity = "0";

            element.style.transform =
                "translateY(40px)";

            element.style.transition =
                `
                opacity 0.8s ease,
                transform 0.8s ease
                `;

        }
    );


    const revealObserver =
        new IntersectionObserver(

            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                });

            },

            {
                threshold: 0.12
            }

        );


    aboutRevealElements.forEach(
        (element) => {

            revealObserver.observe(
                element
            );

        }
    );

}


/* =========================================
   SHOWCASE PARALLAX
========================================= */

const showcaseImage =
    document.querySelector(
        ".showcase-image img"
    );


if (
    showcaseImage &&
    !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches
) {

    window.addEventListener(
        "scroll",
        () => {

            const container =
                showcaseImage.parentElement;

            const rect =
                container.getBoundingClientRect();


            if (
                rect.bottom < 0 ||
                rect.top > window.innerHeight
            ) {
                return;
            }


            const viewportCenter =
                window.innerHeight / 2;

            const elementCenter =
                rect.top +
                rect.height / 2;


            const difference =
                elementCenter -
                viewportCenter;


            const movement =
                difference * 0.035;


            showcaseImage.style.transform =
                `translateY(${
                    -7 + movement / 10
                }%)`;

        },

        {
            passive: true
        }

    );

}