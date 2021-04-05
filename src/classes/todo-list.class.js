/**
 * Esta clase tiene las funcionabilidades basicas que tiene la lista de tareas
 * El constructor solamente tiene un arreglo vacio, que sera usado como repositorio de los todos que estaremos ingresando
 */
export class TodoList {
    constructor() {
        this.todos = [];
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
    }

    eliminarTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }

    marcarCompletado(id) {
        for (const todo of this.todos) {
            if (todo.id == id) {
                todo.completado = !todo.completado;
                break;
            }
        }
    }

    borrarCompletados() {
        this.todos = this.todos.filter((todo) => !todo.completado);
    }
}
