const list = document.querySelector("ul");
const valueArr = [];

// Start setInterval der opdaterer hver sekund
setInterval(generateBars, 1000);

function generateBars() {
  const randomNum = Math.floor(Math.random() * 101); // Generer et tilfældigt tal mellem 0 og 100

  if (valueArr.length >= 20) {
    valueArr.shift(); // Fjern den ældste værdi, hvis der er mere end 20
    list.removeChild(list.firstElementChild); // Fjern den første søjle i listen (ældste)
  }

  valueArr.push(randomNum); // Tilføj den nye værdi til arrayet

  console.log(valueArr);

  const li = document.createElement("li"); // Opret et nyt li-element
  li.style.setProperty("--height", randomNum); // Sæt --height CSS-variabel baseret på det genererede tal

  list.appendChild(li); // Tilføj søjlen til listen
}
