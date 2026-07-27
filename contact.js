/* =========================================
   FAQ ACCORDION
========================================= */

const faqItems =
    document.querySelectorAll(".faq-item");


faqItems.forEach((item) => {

    const button =
        item.querySelector(".faq-question");


    button.addEventListener("click", () => {

        const isActive =
            item.classList.contains("active");


        /*
         * Close currently opened FAQs
         */

        faqItems.forEach((faq) => {

            faq.classList.remove("active");

            const faqButton =
                faq.querySelector(".faq-question");

            faqButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });


        /*
         * Open clicked FAQ if it
         * wasn't already active
         */

        if (!isActive) {

            item.classList.add("active");

            button.setAttribute(
                "aria-expanded",
                "true"
            );

        }

    });

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const formData =
                new FormData(contactForm);


            const name =
                formData
                    .get("name")
                    ?.trim();

            const email =
                formData
                    .get("email")
                    ?.trim();

            const message =
                formData
                    .get("message")
                    ?.trim();


            /*
             * Basic validation
             */

            if (
                !name ||
                !email ||
                !message
            ) {

                formMessage.textContent =
                    "Please complete the required fields.";

                formMessage.style.color =
                    "#c84343";

                return;

            }


            /*
             * Email validation
             */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                formMessage.textContent =
                    "Please enter a valid email address.";

                formMessage.style.color =
                    "#c84343";

                return;

            }


            /*
             * Demo success state.
             *
             * Replace this with your API
             * request when backend is ready.
             */

            formMessage.textContent =
                `Thanks ${name}! Your enquiry is ready to send.`;

            formMessage.style.color =
                "#2c8750";


            /*
             * Example:
             *
             * fetch("/api/contact", {
             *     method: "POST",
             *     headers: {
             *         "Content-Type":
             *             "application/json"
             *     },
             *     body: JSON.stringify(
             *         Object.fromEntries(
             *             formData
             *         )
             *     )
             * })
             */

        }
    );

}


/* =========================================
   FORM ROW REVEAL
========================================= */

const formRows =
    document.querySelectorAll(".form-row");


if (
    "IntersectionObserver" in window &&
    !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches
) {

    formRows.forEach((row, index) => {

        row.style.opacity = "0";

        row.style.transform =
            "translateY(25px)";

        row.style.transition =
            `
            opacity 0.6s ease ${index * 0.05}s,
            transform 0.6s ease ${index * 0.05}s
            `;

    });


    const formObserver =
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
                threshold: 0.15
            }

        );


    formRows.forEach((row) => {

        formObserver.observe(row);

    });

}


/* =========================================
   INFO CARD REVEAL
========================================= */

const infoCards =
    document.querySelectorAll(".info-card");


if (
    "IntersectionObserver" in window &&
    !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches
) {

    infoCards.forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(35px)";

        card.style.transition =
            `
            opacity 0.7s ease ${index * 0.1}s,
            transform 0.7s ease ${index * 0.1}s,
            background 0.4s,
            color 0.4s
            `;

    });


    const cardObserver =
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
                threshold: 0.15
            }

        );


    infoCards.forEach((card) => {

        cardObserver.observe(card);

    });

}