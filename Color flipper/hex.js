const colorsTab = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "F",
];
// console.log(colorsTab);

const btnClick = document.querySelector(".click");
// console.log(btnClick);

const colorName = document.querySelector(".color-name");
// console.log(colorName);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

btnClick.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    let val = colorsTab[getRandomInt(colorsTab.length)];
    hexColor += val;
    // console.log(hexColor);
  }
  // console.log(hexColor);
  document.body.style.backgroundColor = hexColor;
  colorName.textContent = hexColor;
});
