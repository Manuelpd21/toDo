
const newTodoInput = document.getElementById('new-todo');
const addTodoButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');


function addTodo() {
    const todoText = newTodoInput.value.trim();
    if (todoText === '') {
        alert('Por favor ingresa un nuevo TODO');
        return;
    }

    const li = document.createElement('li');

    // Crear el checkbox para marcar como completado
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo-checkbox';

    // agregar la funcionalidad para cambiar el estado de completado
    checkbox.onchange = function() {
        if (checkbox.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
    };

    li.appendChild(checkbox);

    // otras funcionalidades
    const textNode = document.createTextNode(todoText);
    li.appendChild(textNode);

    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.className = 'edit';

    // editar el texto del elemento
    editButton.onclick = function() {
        const newTodoText = prompt('Ingresa un nuevo TODO');
        if (newTodoText) {
            textNode.textContent = newTodoText;
        }
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.className = 'delete';

    // agregar la funcionalidad para borrar el elemento
    deleteButton.onclick = function() {
        const isConfirmed = confirm('¿Estas seguro de borrar este TODO?');
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
addTodoButton.addEventListener('click', addTodo);

newTodoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});