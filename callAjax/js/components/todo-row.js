export function TodoRow(todo) {
  const $todoRow = document.createElement("tr");

  const $idColumn = document.createElement("td");
  $idColumn.innerText = todo.id;

  const $nameColumn = document.createElement("td");
  const $viewDetails = document.createElement("a");

  todo.completed
    ? $nameColumn.classList.add("uncompleted")
    : $nameColumn.classList.add("completed");

  $viewDetails.innerText = todo.title;
  $viewDetails.setAttribute("href", `./todos-details.html?id=${todo.id}`);
  $nameColumn.appendChild($viewDetails);
  $todoRow.append($idColumn, $nameColumn);

  return $todoRow;
}
