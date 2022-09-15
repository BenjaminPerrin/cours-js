import { UserRow } from "../components/user-row.js";
import UsersService from "../services/users.service.js";

class Index {
  constructor(UsersService) {
    this.users = [];
    this.userService = UsersService;
    this.$users = document.querySelector("#users");
  }

  async render() {
    this.users = await this.userService.fetchUsers();
    for (let user of this.users) {
      const row = UserRow(user);
      this.$users.appendChild(row);
    }
  }
}

const index = new Index(UsersService);
index.render();
//const $users = document.querySelector("#users");

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((users) => {
//     for (let user of users) {
//       const $userRow = document.createElement("tr");

//       const $idColumn = document.createElement("td");
//       $idColumn.innerText = user.id;

//       const $nameColumn = document.createElement("td");
//       $nameColumn.innerText = user.name;

//       const $emailColumn = document.createElement("td");
//       $emailColumn.innerText = user.email;

//       const $phoneColumn = document.createElement("td");
//       $phoneColumn.innerText = user.phone;

//       const $websiteColumn = document.createElement("td");
//       $websiteColumn.innerText = user.website;

//       let actionsColumn = document.createElement("td");
//       let redirect = document.createElement("a");
//       actionsColumn.appendChild(redirect);

//       let link = document.createTextNode("voir");

//       redirect.appendChild(link);
//       redirect.title = "voir l'user";
//       redirect.href = `pages/users-details.html?id=` + user.id;

//       $userRow.append(
//         $idColumn,
//         $nameColumn,
//         $emailColumn,
//         $phoneColumn,
//         $websiteColumn,
//         actionsColumn
//       );
//       $users.appendChild($userRow);
//     }
//   })
//   .catch((err) => {
//     console.error(err.message);
//   });

//   # Ajouter page appelé : users-details.html ok
//   # Ajouter dans l'en-tête du tableau une colonne Actions ok
//   # Pour chaque user ajouter dans la colonne un lien avec
//      le text `voir` et redirige vers la page `users-details.html`
//      en passant l'id comme paramètre de l'url(ex : ?id=1)
//   # Dans la page 2, faire des recherches sur l'utilisation
//  URLSearchParam pour pouvoir récupérer l'ID afin de l'utiliser
//  Pour faire un appel HTTP et récupérer un user par son id
//   #Puis afficher le résultat dans une UI de votre choix
