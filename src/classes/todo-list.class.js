import { Todo } from "./todo.class";
import { contador } from "../js/componentes.js";

/**
 * Esta clase tiene un array de todos, sirve como un repositorio en el que guardaremos los todos
 * Ademas de las funcionabilidades basicas que tiene la lista de tareas
 */
export class TodoList {
    constructor() {
        this.cargarLocalStorage();
        this.contarTodos()
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
        this.contarTodos()
    }

    eliminarTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id != id);
        this.guardarLocalStorage();
        this.contarTodos()
    }

    marcarCompletado(id) {
        for (const todo of this.todos) {
            if (todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                this.contarTodos()
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

    contarTodos() {
        let pendientes = 0;
        let tempContador = contador.firstElementChild
        for (const todo of this.todos) {
            if (!todo.completado) {
                pendientes++
            }
        }
        tempContador.innerHTML = pendientes
    }
}