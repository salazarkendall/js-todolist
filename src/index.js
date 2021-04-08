/*

*** RESUMEN DEL PROYECTO ***

src:
   clases:
        index.js                : Centraliza los exports al src/index.js
        todo.class.js           : Clase pojo del todo, contiene 2 constructores
        todo-list.class.js      : Repositorio de todos con las funcionalidades de la lista
   js:
        componentes.js          : Contiene referencias HTML y manejo de eventos de cada elemento
index.js                        : Importa el css, y hace uso de las funcionalidades de la lista ademas de los componentes

*/

import './style.css';
import { TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);
