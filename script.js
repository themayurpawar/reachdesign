const pencil = document.querySelector(".pencil");

document.addEventListener("mousemove", (e) => {

    const x = (e.clientX - window.innerWidth / 2) / 40;
    const y = (e.clientY - window.innerHeight / 2) / 40;

    pencil.style.transform =
        `translate(${x}px, ${y}px)`;

});
