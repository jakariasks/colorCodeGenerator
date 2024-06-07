const btn = document.querySelector("#btn");
const colorCode = document.querySelector("#color-code");
const body = document.querySelector("body");
const text = document.querySelector(".text");

const getColorBg = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomColor = "#" + randomNumber.toString(16);

    body.style.backgroundColor = randomColor;
    colorCode.innerText = randomColor;

    navigator.clipboard.writeText(randomColor);
}

const getColorText = () => {
    const randomNumberT = Math.floor(Math.random() * 16777215);
    const randomColorT = "#" + randomNumberT.toString(16);
    text.style.color = randomColorT;
}

const changeColors = () => {
    getColorBg();
    getColorText();
}


// Event listener
btn.addEventListener("click", changeColors);

// Initial call
getColorBg();
getColorText();
