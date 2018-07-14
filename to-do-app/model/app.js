// Model i.e Todo ( id,title,completed)
class Todo {
    constructor(title) {
        Todo.id++;
        this.id = Todo.id;
        this.title = title;
        this.completed = false
    }
}
Todo.id = 0;
//-----------------------------------------------

// Service i.e TodoService

class TodoService {
    constructor() {
        this.todos = []
    }
    addTodo(title) {
        // TODO:
        let newTodo = new Todo(title);
        this.todos = this.todos.concat(newTodo);
    }
    editTodo(id, newTitle) {
        let editedTodo = this.todos.find(function (value) {
            if (value.id === id) return true;
            return false;
        })
        editedTodo.title = newTitle;



    }
    completeTodo(id) {
        // TODO:
        let newTodos = this.todos.map(function (value, idx) {
            if (value.id === id) value.completed = !value.completed;

            return value;
        })

        this.todos = newTodos;


    }
    deleteTodo(id) {
        // TODO:
        let newTodos = this.todos.filter(function (value, idx) {
            if (value.id === id) return false;
            return true;
        })
        this.todos = newTodos;


    }
    completeAll() {
        if (this.todos.every(function (value) { return value.completed === true; })) {
            let newTodos = this.todos.map(function (value, idx) {
                value.completed = false;
                return value;
            })

            this.todos = newTodos;

        }
        else {
            let newTodos = this.todos.map(function (value, idx) {
                value.completed = true;
                return value;
            })

            this.todos = newTodos;
        }
    }
    clearCompleted() {
        // TODO:
        let newTodos = this.todos.filter(function (value, idx) {
            if (value.completed === true) return false;
            return true;
        })

    }
    viewTodos(filter) {
        // filter ==> 'ALL' | 'ACTIVE' | 'COMPLETED'
        let newTodos;
        if (filter === "ALL") {
            newTodos = this.todos.filter(function (value, idx) {
                return true;
            })
            console.log(newTodos);
        }
        else if (filter === "ACTIVE") {
            newTodos = this.todos.filter(function (value, idx) {
                if (value.completed === false) return true;
                return false;
            })
            console.log(newTodos);
        }
        else if (filter === "COMPLETED") {
            newTodos = this.todos.filter(function (value, idx) {
                if (value.completed === true) return true;
                return false;
            })
            console.log(newTodos);
        }
    }

}

//-------------------------------------------

const todosService = new TodoService();