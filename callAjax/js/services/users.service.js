import { BASE_URL } from "../constants.js";

export class UsersService {
  constructor() {
    this.url = `${BASE_URL}/users`;
  }

  fetchUsers() {
    return fetch(this.url)
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        return users;
      });
  }

  fetchUserById(id) {
    return fetch(this.url + `/` + id)
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        return user;
      });
  }
}

export default new UsersService();
