const isMobile = window.innerWidth <= 768;

// DESKTOP
if (!isMobile) {

    document.addEventListener("mousemove", (e) => {

        console.log(
            "Mouse:",
            e.clientX,
            e.clientY
        );

    });

}

// MOBILE
else {

    function startGyroscope() {

        window.addEventListener("deviceorientation", (event) => {

            console.log(
                "Gamma:",
                event.gamma,
                "Beta:",
                event.beta
            );

        });

    }

    if (
        typeof DeviceOrientationEvent !== "undefined" &&
        typeof DeviceOrientationEvent.requestPermission === "function"
    ) {

        document.body.addEventListener("click", async () => {

            const permission =
                await DeviceOrientationEvent.requestPermission();

            if (permission === "granted") {

                startGyroscope();

            }

        }, { once: true });

    }

    else {

        startGyroscope();

    }

}
