
/// Array to hold todo items
/// Each item will be an object with 'todo' and 'dueDate' properties
let todoList = [];

function validateForm() {
    const todoInput = document.getElementById('todo-input').value.trim();
    const dateInput = document.getElementById('date-input').value;

    // Check if inputs are empty
    if (todoInput === '' || dateInput === '') {
        alert('Please enter a todo item and a due date.');
    } else {
        // Add the todo item to the list
        addTodo(todoInput, dateInput);
        // Clear the input fields
        document.getElementById('todo-input').value = '';
        document.getElementById('date-input').value = '';
    }
}

function addTodo(todo, date) {
    // Create a new todo item object
    const todoItem = {
        task: todo,
        dueDate: date
    };
    // Add the todo item to the todoList array
    todoList.push(todoItem);
    // Display the updated todo list
    displayTodos();
}

function displayTodos() {
    // Get the todo list element from the DOM
    const todoListElement = document.getElementById('todo-list');
    todoListElement.innerHTML = ''; // Clear the list before displaying

    // Loop through the todoList array and create list item
    todoList.forEach((item, index) => {
        todoListElement.innerHTML += `<div class="text-grey-700" text-xl>${item.task} (${item.dueDate})</div>`;
    });
}

function clearTodos() {
    // Clear the todo list
    todoList = [];
    // Clear the displayed todo list
    displayTodos();  
}   