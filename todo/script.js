document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todoInput');
    const addBtn = document.getElementById('addBtn');
    const todoList = document.getElementById('todoList');
    const clearBtn = document.getElementById('clearBtn');

    // Load todos from localStorage or create empty array
    let todos = loadTodos();
    renderTodos();

    addBtn.addEventListener('click', addTodo);
    clearBtn.addEventListener('click', clearTodos);
    todoInput.addEventListener('keypress', function(e) {
      if(e.key === 'Enter') {
        addTodo();
      }
    })

    function addTodo() {
        const text = todoInput.value.trim();
        if (text) {
            const newTodo = {
                text: text,
                completed: false
            };
            todos.push(newTodo);
            saveTodos(todos);
            renderTodos();
            todoInput.value = '';
        }
    }

    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.checked = todo.completed;
            checkbox.addEventListener('change', () => toggleTodo(index));
            const span = document.createElement('span')
            span.textContent = todo.text;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => deleteTodo(index));
            li.appendChild(checkbox)
             li.appendChild(span)
             li.appendChild(deleteBtn);
            if (todo.completed) {
                li.classList.add('completed');
            }
            todoList.appendChild(li);
        });
    }

    function toggleTodo(index) {
        todos[index].completed = !todos[index].completed;
        saveTodos(todos);
        renderTodos();
    }
   function deleteTodo(index) {
        todos.splice(index, 1);
        saveTodos(todos);
        renderTodos();
    }

    function clearTodos() {
        todos = [];
        saveTodos(todos);
        renderTodos();
    }

    function loadTodos() {
      const storedTodos = localStorage.getItem('todos');
      return storedTodos ? JSON.parse(storedTodos) : [];
    }

    function saveTodos(todos) {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
});