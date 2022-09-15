import { UserDetailsRow } from "../components/user-details-row.js";
import UsersService from "../services/users.service.js";
import { getParams } from "../utils/get-param.js";

class ScriptUserDetails {
  constructor(UsersService) {
    this.userService = UsersService;
    this.$user = document.querySelector("#user");
    this.id = getParams("id");
    this.user = null;
  }

  async render() {
    this.user = await this.userService.fetchUserById(this.id);
    const row = UserDetailsRow(this.user);
    this.$user.appendChild(row);
  }
}

const scriptUserDetails = new ScriptUserDetails(UsersService);
scriptUserDetails.render();

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
