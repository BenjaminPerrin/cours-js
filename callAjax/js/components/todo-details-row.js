export function TodoDetailsRow(todo) {
  const $todoRow = document.createElement("tr");

  const $idColumn = document.createElement("td");
  $idColumn.innerText = todo.id;

  const $nameColumn = document.createElement("td");
  $nameColumn.innerText = todo.title;

  todo.completed
    ? $nameColumn.classList.add("completed")
    : $nameColumn.classList.add("uncompleted");

  $todoRow.append($idColumn, $nameColumn);
  return $todoRow;
}
