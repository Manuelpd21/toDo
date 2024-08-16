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

    // Create checkbox for marking as completed
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo-checkbox';

    // Add functionality to toggle completed state
    checkbox.onchange = function() {
        if (checkbox.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
    };

    li.appendChild(checkbox);

    // The rest of your code...
    const textNode = document.createTextNode(todoText);
    li.appendChild(textNode);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit';

    // Add edit button functionality
    editButton.onclick = function() {
        const newTodoText = prompt('Enter new todo text');
        if (newTodoText) {
            textNode.textContent = newTodoText;
        }
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';

    // Add delete button functionality
    deleteButton.onclick = function() {
        const isConfirmed = confirm('Are you sure you want to delete this item from the list?');
        if (isConfirmed) {
            todoList.removeChild(li);
        }
    };

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);

    li.appendChild(buttonContainer);
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