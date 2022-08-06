const container = document.getElementById("container");
const button = document.getElementById("btn");
const refresh_btn = document.getElementById("refresh-btn");
const colorPicker = document.querySelector("#colorPicker");



function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    //cell.innerText = (c + 1);
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "black"
    });
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

// changes the dimenstions to what the user inputs
button.addEventListener("click", () => {
  while(container.firstChild){
    container.removeChild(container.firstChild);
}
  let userInput = prompt();
  makeRows(userInput, userInput);
})

// Refreshes page when btn is clicked
refresh_btn.addEventListener("click", () => {
  window.parent.location = window.parent.location.href;
})

// changes the grid trail background color
/*
colors.forEach((color) => {
  color.addEventListener("click", (e) => {
    let color_change = e.target.id;

    container.style.backgroundColor = color_change;
  })
})
*/

// change color
colorPicker.addEventListener("input", () => {
  let newColor = document.getElementById("colorPicker").value;
  let cells = container.children;

  for(let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("mouseover", (cell) => {
        cell.target.style.backgroundColor = newColor;
    })
  }
})




