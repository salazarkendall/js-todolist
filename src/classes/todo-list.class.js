import { Todo } from "./todo.class";

/**
 * Esta clase tiene las funcionabilidades basicas que tiene la lista de tareas
 * El constructor solamente tiene un arreglo vacio, que sera usado como repositorio de los todos que estaremos ingresando
 */
export class TodoList {
    constructor() {
        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id != id);
        this.guardarLocalStorage();
    }

    marcarCompletado(id) {
        for (const todo of this.todos) {
            if (todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    borrarCompletados() {
        this.todos = this.todos.filter((todo) => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage() {
        this.todos = localStorage.getItem('todo') ?
            JSON.parse(localStorage.getItem('todo')) : [];
        this.todos = this.todos.map(Todo.fromJson)
    }
}