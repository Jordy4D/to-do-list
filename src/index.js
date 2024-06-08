import './style.css';

import { Project } from './project.js'
import { Task } from './task.js'
import { format } from "date-fns";
import { populateTasks } from './DOMController.js';

format(new Date(2014, 1, 11), "MM/dd/yyyy");

// const newTask = new TaskList( "Test Title", "Test Description","Test Due Date","Test Prio","Test Notes");
// window.newTask = newTask;




// window.Task = Task;
window.Project = Project;
window.Task = Task;
window.populateTasks = populateTasks;
window.projectList = [];
window.newProject1 = new Project("Shopping Needs")
newProject1.newTask("Mulch", "Need mulch for the garden", "06/10/24", "Medium")
newProject1.newTask("Groceries", "So Hungry!", "06/12/24", "High")
newProject1.newTask("Toys", "It keeps the children happy", "06/20/24", "Low")
populateTasks(newProject1)
projectList.push(newProject1)



// should be 'allProjects' array that holds all of the projects, todos, tasks
// a forEach function to print everything to the dom

// function testing() {
//     const fakeProject = [];
    
//     const testTask1 = new Task ("Test To Do 1",  "A test project for testing class extensions", "Due ASAP", "High Prio")
//     testProject.push(testTask1)
    
//     const testTask2 = new Task ("Test To Do 2", "A test project for testing class extensions", "Due ASAP", "High Prio")
//     testProject.push(testTask2)
    
//     const testTask3 = new Task ("Test To Do 3", "A test project for testing class extensions", "Due ASAP", "High Prio")
//     testProject.push(testTask3)
    
//     projectList.push(testProject)
    
//     const projectList = [];
//     const testProject = [];

//     const newProject1 = new Project("Shopping Needs")
//     newProject1.newTask("Mulch", "Need mulch for the garden", "06/10/24", "Medium")
//     newProject1.newTask("Groceries", "So Hungry!", "06/12/24", "High")
//     newProject1.newTask("Toys", "It keeps the children happy", "06/20/24", "Low")


    
    
    
//     return testProject;
// }