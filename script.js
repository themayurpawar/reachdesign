const pencil = document.querySelector(".pencil");
const content = document.querySelector(".content");

document.addEventListener("mousemove", (e) => {

    const x = (e.clientX - window.innerWidth / 2) / 40;
    const y = (e.clientY - window.innerHeight / 2) / 40;

    pencil.style.transform =
        `translate(${x}px, ${y}px)`;

    content.style.transform =
        `translate(${x * 0.3}px, ${y * 0.3}px)`;

});