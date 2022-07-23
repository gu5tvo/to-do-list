const todoList = document.querySelector('.todo-list');
const newTodo = document.querySelector('.new-todo');
const todos = [];
displayTodos();

newTodo.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (newTodo.value === '') {
            //
        } else {
            todos.push({ todoLabel: newTodo.value, completed: false });
            newTodo.value = '';
            // console.log(todos);
        }
        displayTodos();
    }
})

function displayTodos() {
    todoList.innerHTML = '';

    for (let i = 0; i < todos.length; i++) {
        const itemTodo = document.createElement('li');
        todoList.appendChild(itemTodo);
        itemTodo.className = 'item-todo';
        // console.log(todos[i].todoLabel);

        const view = document.createElement('div');
        itemTodo.appendChild(view);
        view.className = 'view';
        
        const start = document.createElement('div');
        view.appendChild(start);
        start.className = 'start';

        const toggle = document.createElement('input');
        toggle.type = 'checkbox';
        toggle.className ='toggle'
        toggle.id = 'toggle';
        toggle.name = 'toogle';
        start.appendChild(toggle);
        toggle.addEventListener('change', (e) =>{
            if (e.currentTarget.checked) {
                todos[i].completed = true;
                // console.log(todos);
                toogleLabel.className = 'done';
            } else {
                todos[i].completed = false;
                // console.log(todos);
                toogleLabel.className = 'undone';
            }
        })

       todos.map((item) => {
            item.completed === true &&
            (toogleLabel.className = 'done');
       })
        
        
        const toogleLabel = document.createElement('label');
        start.appendChild(toogleLabel);
        toogleLabel.setAttribute('for','toggle');
        toogleLabel.innerHTML = todos[i].todoLabel;
        
        const removeButton = document.createElement('button');
        view.appendChild(removeButton);
        removeButton.className = 'remove-button';
        removeButton.id = i;
        removeButton.innerHTML = 'X';
        removeButton.addEventListener('click', () => {
            todos.splice(i, 1);
            displayTodos();
        }

        );
    }
}



