console.log("cc");
const btn = document.querySelector(".btn");
const txt = document.querySelector("#colorTxt");
const background = document.querySelector("#background");
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const exa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
btn.addEventListener("click", function (event) {
  // event.preventDefault();
  const newColor = getRandomInt(1, 4);
  background.style.backgroundColor = colors[newColor];
  txt.innerHTML = `Background Color ` + colors[newColor];
  console.log("test");
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
