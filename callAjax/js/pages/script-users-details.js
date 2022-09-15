import { UserDetailsRow } from "../components/user-details-row.js";
import { UsersService } from "../services/users.service.js";

class Index {
  constructor() {
    this.users = [];
    this.userService = new UsersService();
    this.$users = document.querySelector("#user");
  }

  async render() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const idUser = urlParams.get("id");
    this.users = await this.userService.fetchUserById(idUser);
    const row = UserDetailsRow(this.users);
    this.$users.appendChild(row);
  }
}

const index = new Index();
index.render();

// const $users = document.querySelector("#users");
// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const idUser = urlParams.get("id");

// fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`)
//   .then((response) => {
//     return response.json();
//   })
//   .then((user) => {
//     const $userRow = document.createElement("tr");

//     const $idColumn = document.createElement("td");
//     $idColumn.innerText = user.id;

//     const $nameColumn = document.createElement("td");
//     $nameColumn.innerText = user.name;

//     const $emailColumn = document.createElement("td");
//     $emailColumn.innerText = user.email;

//     const $adresseColumn = document.createElement("td");
//     $adresseColumn.innerText =
//       user.address.street +
//       `, ` +
//       user.address.suite +
//       `, ` +
//       user.address.city;

//     const $phoneColumn = document.createElement("td");
//     $phoneColumn.innerText = user.phone;

//     const $websiteColumn = document.createElement("td");
//     $websiteColumn.innerText = user.website;

//     const $companyColumn = document.createElement("td");
//     $companyColumn.innerText = user.company.name;

//     $userRow.append(
//       $idColumn,
//       $nameColumn,
//       $emailColumn,
//       $adresseColumn,
//       $phoneColumn,
//       $websiteColumn,
//       $companyColumn
//     );
//     $users.appendChild($userRow);
//   })
//   .catch((err) => {
//     console.error(err.message);
//   });
