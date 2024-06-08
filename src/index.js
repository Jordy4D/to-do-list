import './style.css';

import { Project } from './project.js'
import { ToDo } from './todo.js'
import { populateToDos } from './populateToDos.js';
import { format } from "date-fns";
import { deleteTask } from "./deleteTask.js";


format(new Date(2014, 1, 11), "MM/dd/yyyy");

// const newToDo = new ToDoList( "Test Title", "Test Description","Test Due Date","Test Prio","Test Notes");
// window.newToDo = newToDo;


// window.Task = Task;
window.Project = Project;
window.ToDo = ToDo;
window.populateToDos = populateToDos;
window.deleteTask = deleteTask;

// should be 'allProjects' array that holds all of the projects, todos, tasks
// a forEach function to print everything to the dom

function testing() {
    const fakeProject = [];
    
    const testToDo1 = new ToDo ("Test To Do 1",  "A test project for testing class extensions", "Due ASAP", "High Prio")
    testProject.push(testToDo1)
    
    const testToDo2 = new ToDo ("Test To Do 2", "A test project for testing class extensions", "Due ASAP", "High Prio")
    testProject.push(testToDo2)
    
    const testToDo3 = new ToDo ("Test To Do 3", "A test project for testing class extensions", "Due ASAP", "High Prio")
    testProject.push(testToDo3)
    
    projectList.push(testProject)
    
    const projectList = [];
    const testProject = [];

    const newProject1 = new Project("Shopping Needs")
    newProject1.newToDo("Mulch", "Need mulch for the garden", "06/10/24", "Medium")
    newProject1.newToDo("Groceries", "So Hungry!", "06/12/24", "High")
    newProject1.newToDo("Toys", "It keeps the children happy", "06/20/24", "Low")


    
    
    
    return testProject;
}