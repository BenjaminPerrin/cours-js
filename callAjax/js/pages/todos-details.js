import { TodoDetailsRow } from "../components/todo-details-row.js";
import TodosService from "../services/todos.service.js";
import { getParams } from "../utils/get-param.js";

class Todos {
  constructor(TodosService) {
    this.todo = null;
    this.todoService = TodosService;
    this.id = getParams("id");
    this.$todo = document.querySelector("#todo");
  }

  async render() {
    this.todo = await this.todoService.fetchTodoById(this.id);
    const row = TodoDetailsRow(this.todo);
    this.$todo.appendChild(row);
  }
}

const todos = new Todos(TodosService);
todos.render();
