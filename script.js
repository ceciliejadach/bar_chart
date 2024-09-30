const list = document.querySelector("ul");
const valueArr = [];

setInterval(generateBars, 1000);
function generateBars() {
  const randomNum = Math.floor(Math.random() * 100);

  if (valueArr.length > 9) {
    valueArr.shift();
  }

  valueArr.push(randomNum);

  console.log(valueArr);
  //   const li = document.createElement("li");
  //   li.style.setProperty("--height", "30");
  //   list.appendChild(li);
}
