const pencil = document.querySelector(".pencil");
const content = document.querySelector(".content-wrapper");

const mobilePencil = document.querySelector(".mobile-pencil");
const mobileContent = document.querySelector(".mobile-content");

// =========================
// Desktop Mouse Parallax
// =========================

if (window.innerWidth > 768) {

    document.addEventListener("mousemove", (e) => {

        const x = (e.clientX - window.innerWidth / 2) / 20;
        const y = (e.clientY - window.innerHeight / 2) / 20;

        if (pencil) {
            pencil.style.transform =
                `translate(${x}px, ${y}px) rotate(${x * 0.3}deg)`;
        }

        if (content) {
            content.style.transform =
                `translate(calc(-50% + ${x * 1.5}px), calc(-50% + ${y * 1.5}px))`;
        }

    });

}

// =========================
// Mobile Gyroscope
// =========================

else {

    window.addEventListener("deviceorientation", (event) => {

        const x = event.gamma * 15;
        const y = event.beta * 15;

        if (mobilePencil) {

            mobilePencil.style.transform =
                `translateX(calc(-50% + ${x}px))
                 translateY(${y}px)
                 rotate(${x * 4}deg)`;

        }

        if (mobileContent) {

            mobileContent.style.transform =
                `translate(${x * 5}px, ${y * 5}px)`;

        }

    });

}
