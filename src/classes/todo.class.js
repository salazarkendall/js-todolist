/**
 * Esta clase es como la tipica clase de java
 * Una clase pojo con los valores que debe de tener a la hora de construirse
 * ID es generado de manera automatica con un codigo casi irrepetible
 */
export class Todo {
    constructor(tarea) {
        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }
}
