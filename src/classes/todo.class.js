export class Todo {
    constructor(tarea) {
        this.tarea = tarea;
        this.id = new Date().getTime(); // <- Esta es una manera simple de generar un codigo
        this.completado = false;
        this.creado = new Date();
    }
}
