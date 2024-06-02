import './style.css';
import { ToDoList } from './todo.js';

const newToDo = new ToDoList( "Test Title", "Test Description","Test Due Date","Test Prio","Test Notes");

window.ToDoList = ToDoList;
window.newToDo = newToDo;



