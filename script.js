const pencil = document.querySelector(".pencil");
const content = document.querySelector(".content-wrapper");

document.addEventListener("mousemove", (e) => {

    const x = (e.clientX - window.innerWidth / 2) / 40;
    const y = (e.clientY - window.innerHeight / 2) / 40;

    // Pencil movement
    pencil.style.transform =
        `translate(${x}px, ${y}px)`;

    // Content movement
    content.style.transform =
        `translate(calc(-50% + ${x * 0.25}px), calc(-50% + ${y * 0.25}px))`;

});
