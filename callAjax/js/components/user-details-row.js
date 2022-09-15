export function UserDetailsRow(user) {
  const $userRow = document.createElement("tr");

  const $idColumn = document.createElement("td");
  $idColumn.innerText = user.id;

  const $nameColumn = document.createElement("td");
  $nameColumn.innerText = user.name;

  const $emailColumn = document.createElement("td");
  $emailColumn.innerText = user.email;

  const $adresseColumn = document.createElement("td");
  $adresseColumn.innerText =
    user.address.street + `, ` + user.address.suite + `, ` + user.address.city;

  const $phoneColumn = document.createElement("td");
  $phoneColumn.innerText = user.phone;

  const $websiteColumn = document.createElement("td");
  $websiteColumn.innerText = user.website;

  const $companyColumn = document.createElement("td");
  $companyColumn.innerText = user.company.name;

  $userRow.append(
    $idColumn,
    $nameColumn,
    $emailColumn,
    $adresseColumn,
    $phoneColumn,
    $websiteColumn,
    $companyColumn
  );
  return $userRow;
}
