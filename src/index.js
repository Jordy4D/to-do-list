import { Project } from './project.js'
import { Task, deleteTask } from './task.js'
import { format } from "date-fns";
import { populateTasks } from './DOMController.js';
import './style.css';

format(new Date(2014, 1, 11), "MM/dd/yyyy");

// const newTask = new TaskList( "Test Title", "Test Description","Test Due Date","Test Prio","Test Notes");
// window.newTask = newTask;




window.Project = Project;
window.Task = Task;
window.populateTasks = populateTasks;
window.deleteTask = deleteTask;
window.projectList = [];
window.newProject1 = new Project("Shopping Needs")
newProject1.newTask("Mulch", "Need mulch for the garden", "06/10/24", "Medium")
newProject1.newTask("Groceries", "So Hungry!", "06/12/24", "High")
newProject1.newTask("Toys", "It keeps the children happy", "06/20/24", "Low")
populateTasks(newProject1.tasks)
projectList.push(newProject1)


const deleteBtn = document.getElementsByClassName("deleteBtn") 

deleteBtn.addEventListener("click", function() {
    console.log('fart')
})


