let buttonRandom = document.querySelector(".button-random");
let colors = [
  "#00aefd",
  "#ffa400",
  "#07a787",
  "#ff7870",
  "black",
  "pink",
  "yellow",
  "#e74c3c",
  "#2979ff",
];
let red = ["red"]
let buttonRed = document.querySelector(".button-red");


buttonRandom.addEventListener("click", function () {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;

});

buttonRed.onclick("click", function () {
    let redcolor = colors[Math.floor(ffa400.length)]
    redcolor.style.backgroundColor ="red"
});

