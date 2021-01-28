
const buttonCaptureColor = document.getElementById("capture-color");
const labelCurrentColor = document.getElementById("current-color");

let currentColor = null; 

//inicializar popup.js
(() => {
    loadCurrentColor();
})();

async function loadCurrentColor() {
    currentColor = await getCurrentColor();
    labelCurrentColor.innerHTML = currentColor;
}

async function captureColor(){
    console.log("AAAAAAAA")
}