// Get references to the DOM elements
const newTodoInput = document.getElementById('new-todo');
const addTodoButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');


// Function to add a new todo item
function addTodo() {
    const todoText = newTodoInput.value.trim();
    if (todoText === '') {
        alert('Please enter a todo');
        return;
    }

    const li = document.createElement('li');
    li.textContent = todoText;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';

    // Create the button container and append buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);

    // Append the button container to the li
    li.appendChild(buttonContainer);

    // Append the li to the todo list
    todoList.appendChild(li);

    newTodoInput.value = '';
}


// Add event listener to the "Add Todo" button
addTodoButton.addEventListener('click', addTodo);

// Optional: Add functionality to hit "Enter" to add todo
newTodoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});