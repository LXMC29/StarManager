function Add() {
  var name = window.prompt("Mời nhập tên:");
  if (name == null || name == "") return;

  const newRow = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = name;

  const starCell = document.createElement("td");
  starCell.textContent = 0;

  const actionCell = document.createElement("td");

  const addStar = document.createElement("button");
  addStar.innerHTML = '<i class="bi bi-star-fill"></i>';

  const deleteStar = document.createElement("button");
  deleteStar.innerHTML = '<i class="bi bi-star"></i>';

  const removeRow = document.createElement("button");
  removeRow.innerHTML = '<i class="bi bi-trash"></i>';

  addStar.addEventListener("click", function () {
    let currentStars = parseInt(starCell.textContent);
    starCell.textContent = currentStars + 1;
  });

  deleteStar.addEventListener("click", function () {
    let currentStars = parseInt(starCell.textContent);
    if (currentStars < 1) return;
    starCell.textContent = currentStars - 1;
  });

  removeRow.addEventListener("click", function () {
    if (confirm("Bạn có chắc chắn muốn xoá không?")) {
      tableBody.removeChild(newRow);
    }
  });

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  buttonContainer.appendChild(addStar);
  buttonContainer.appendChild(deleteStar);
  buttonContainer.appendChild(removeRow);

  actionCell.appendChild(buttonContainer);

  newRow.appendChild(nameCell);
  newRow.appendChild(starCell);
  newRow.appendChild(actionCell);

  const tableBody = document.getElementById("tableBody");
  tableBody.appendChild(newRow);
}
