const container = document.getElementById("container");
const button = document.getElementById("btn");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    //cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

// grid change when the top button is pressed
button.addEventListener("click", () => {
  let userInput = prompt();
})

makeRows(userInput, userInput);


