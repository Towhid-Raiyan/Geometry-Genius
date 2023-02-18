// /Remove the  class from the element then generate random
// then apply random color

const colorElements = document.querySelectorAll("#hover-color");
for(let i = 0 ; i < colorElements.length ; i++){

    colorElements[i].addEventListener("mouseenter", function () {
        colorElements[i].classList.remove("bg-base-100");
        const rgbOne = Math.floor(Math.random() * 255);
        const rgbTwo = Math.floor(Math.random() * 255);
        const rgbThree = Math.floor(Math.random() * 255);
        colorElements[i].style.backgroundColor = `rgb(${rgbOne}, ${rgbTwo}, ${rgbThree})`;
      });
}
