console.log('connecté'); 
const form = document.getElementById('form');
const todo = document.getElementById('todo');
let lists = document.querySelector('.list-items');
let todolist = [];

createTodo();
form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    todolist = JSON.parse(localStorage.getItem("todoList"));
    if (!todolist) {
        todolist = [];
    }
    let todoValue = todo.value.trim();
    if (todoValue != "") {
        todolist.push(todoValue);
    }
    localStorage.setItem("todoList", JSON.stringify(todolist));
    todo.value = "";
    createTodo()
});

function createTodo(){
    if (JSON.parse(localStorage.getItem("todoList")) !== null) {
        todolist = JSON.parse(localStorage.getItem("todoList"));
        console.log(todolist);
        let template = "";
        if (todolist !== 'undefined' && todolist !== null ) {
            for (let i = 0; i < todolist.length; i++) {
                template = template +
                `<div class='item'><p>${todolist[i]}</p>`+
                `<button class="btn-delete">
                <i class="fas fa-trash-alt">`+
                `</i></button></div>`
                //console.log(template);
                lists.innerHTML = template;

            }
        }
    }
    if (document.querySelector('.btn-delete') !== null) {
    
        let deleteButton = document.querySelectorAll('.btn-delete');
        for (let i = 0; i < deleteButton.length; i++) {
            deleteButton[i].addEventListener('click', function onClick() {
                deleteButton[i].parentElement.remove();
                let value = deleteButton[i].previousElementSibling.innerHTML;
                todolist.splice(todolist.indexOf(value),1)
                localStorage.setItem("todoList", JSON.stringify(todolist));
            });
            
        }
        
    }
}
