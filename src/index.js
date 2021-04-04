import './style.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

const tarea = new Todo('Aprender Javascript');

todoList.nuevoTodo(tarea);

crearTodoHtml(tarea);
