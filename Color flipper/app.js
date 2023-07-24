const tabColors = ["Red", "Yellow", "Green", "Pink", "Blue", "Purple"];
const btnClick = document.querySelector(".click");
// console.log(btnClick);
const color = document.querySelector(".color-name");
// console.log(color);

btnClick.addEventListener("click", () => {
  let colorChoosen = tabColors[getRandomInt(tabColors.length)];
  document.body.style.backgroundColor = colorChoosen;
  color.textContent = colorChoosen;
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
