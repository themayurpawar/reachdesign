const pencil = document.querySelector(".pencil");
const content = document.querySelector(".content");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {

    mouseX = (e.clientX - window.innerWidth / 2) / 45;
    mouseY = (e.clientY - window.innerHeight / 2) / 45;

});

function animate(){

    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;

    if(pencil){
        pencil.style.left = (-70 + currentX) + "px";
    }

    if(content){
        content.style.transform =
        `translate(${currentX*0.20}px, ${currentY*0.20}px)`;
    }

    requestAnimationFrame(animate);

}

animate();
