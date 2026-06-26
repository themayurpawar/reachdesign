// ==============================
// Elements
// ==============================

const pencil = document.querySelector(".pencil");
const content = document.querySelector(".content-wrapper");

const mobilePencil = document.querySelector(".mobile-pencil");
const mobileContent = document.querySelector(".mobile-content");
const mobileLogo = document.querySelector(".mobile-logo");
const mobileComing = document.querySelector(".mobile-coming");

// ==============================
// Desktop Mouse Parallax
// ==============================

if (window.innerWidth > 768) {

    document.addEventListener("mousemove", (e) => {

        const x = (e.clientX - window.innerWidth / 2) / 25;
        const y = (e.clientY - window.innerHeight / 2) / 25;

        if (pencil) {
            pencil.style.transform =
                `translate(${x}px, ${y}px) rotate(${x * 0.5}deg)`;
        }

        if (content) {
            content.style.transform =
                `translate(calc(-50% + ${x * 0.5}px), calc(-50% + ${y * 0.5}px))`;
        }

    });

}

// ==============================
// Mobile Gyroscope
// ==============================

else {

    window.addEventListener("deviceorientation", (event) => {

        // Sensor values
        const rawX = event.gamma || 0;
        const rawY = event.beta || 0;

        // Limit movement
        const x = Math.max(-15, Math.min(15, rawX));
        const y = Math.max(-15, Math.min(15, rawY));

        // Pencil (Front Layer)
        if (mobilePencil) {

            mobilePencil.style.transform =
                `translateX(calc(-50% + ${x * 1.4}px))
                 translateY(${y * 1.4}px)
                 rotate(${x * 0.8}deg)`;

        }

        // Logo
        if (mobileLogo) {

            mobileLogo.style.transform =
                `translate(${x * 0.8}px, ${y * 0.8}px)`;

        }

        // Main Content
        if (mobileContent) {

            mobileContent.style.transform =
                `translate(${x * 0.6}px, ${y * 0.6}px)`;

        }

        // Coming Soon
        if (mobileComing) {

            mobileComing.style.transform =
                `translate(${x * 0.3}px, ${y * 0.3}px)`;

        }

    });

}
