const container = document.getElementById("container");
const button = document.getElementById("btn");
const refresh_btn = document.getElementById("refresh-btn");

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

// changes the dimenstions to what the user inputs
button.addEventListener("click", () => {
  let userInput = prompt();
  makeRows(userInput, userInput);
})

// Refreshes page when btn is clicked
refresh_btn.addEventListener("click", () => {
  window.parent.location = window.parent.location.href;
})


