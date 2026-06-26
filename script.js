const pencil = document.querySelector(".pencil");
const content = document.querySelector(".content-wrapper");

const mobilePencil = document.querySelector(".mobile-pencil");
const mobileContent = document.querySelector(".mobile-content");

// ---------- Desktop Mouse Parallax ----------

if (window.innerWidth > 768) {

    document.addEventListener("mousemove", (e) => {

        const x = (e.clientX - window.innerWidth / 2) / 40;
        const y = (e.clientY - window.innerHeight / 2) / 40;

        pencil.style.transform =
            `translate(${x}px, ${y}px)`;

        content.style.transform =
            `translate(calc(-50% + ${x * 0.25}px), calc(-50% + ${y * 0.25}px))`;

    });

}

// ---------- Mobile Gyroscope ----------

else {

    window.addEventListener("deviceorientation", (event) => {

const x = event.gamma * 2.5;
const y = event.beta * 2.5;

        if (mobilePencil) {

mobilePencil.style.transform =
`translateX(calc(-50% + ${x}px))
 translateY(${y}px)
 rotate(${x * 0.6}deg)`;

        }

        if (mobileContent) {

            mobileContent.style.transform =
                `translate(${x * 0.5}px, ${y * 0.5}px)

        }

    });

}
