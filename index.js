const gameContainer = document.querySelector(".container"),
UserResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((Image, index) => {
    Image.addEventListener("click", () => {

        Image.classList.add("active");

        UserResult.src = cpuResult.src = "Images/rock.png";
        result.textContent = "Wait..."

        optionImages.forEach((image2, index2) => {
            if (index !== index2) {
                image2.classList.remove("active");
            }
        });
        gameContainer.classList.add("start");

        let time = setTimeout(() => {
            gameContainer.classList.remove("start");
            // FIX: get image correctly
            let imageSrc = Image.querySelector("img").src;
            UserResult.src = imageSrc;

            // CPU random image
            let randomNumber = Math.floor(Math.random() * 3);
            let cpuImages = ["Images/rock.png", "Images/paper.png", "Images/scissors.png"];

            // FIX: cpuResult must be an <img>
            cpuResult.src = cpuImages[randomNumber];
            let cpuValue = ["R", "P", "S"][randomNumber];
            let userValue = ["R", "P", "S"][index];

            let outcomes = {
                RR: "Draw",
                RP: "Cpu",
                RS: "User",
                PP: "Draw",
                PR: "User",
                PS: "Cpu",
                SS: "Draw",
                SR: "Cpu",
                SP: "User",
            };
            let outComeValue = outcomes[userValue + cpuValue];
            result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} won!!`;

        },2500);




    });
});
