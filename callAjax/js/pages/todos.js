import { TodoRow } from "../components/todo-row.js";
import TodosService from "../services/todos.service.js";

class Todos {
  constructor(TodosService) {
    this.todos = [];
    this.todoService = TodosService;
    this.$todos = document.querySelector("#todos");
  }

  async render() {
    this.todos = await this.todoService.fetchTodos();
    for (let todo of this.todos) {
      const row = TodoRow(todo);
      this.$todos.appendChild(row);
    }
  }
}

const todos = new Todos(TodosService);
todos.render();
