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

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';
    deleteButton.onclick = function() {
        const isConfirmed = confirm('Are you sure you want to delete this item from the list?');
        if (isConfirmed) {
            todoList.removeChild(li);
        }
    };

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit';
    editButton.onclick = function() {
        const newTodoText = prompt('Enter new todo text');
        if (newTodoText) {
            li.firstChild.textContent = newTodoText; // Change the text but keep the buttons
        }
    };

    li.appendChild(deleteButton);
    li.appendChild(editButton);
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