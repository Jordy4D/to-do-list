import './style.css';
import { Task } from './task.js'
import { ToDo } from './todo.js';
import { Project } from './project.js'
import { populateProject } from './populateProject.js';


// const newToDo = new ToDoList( "Test Title", "Test Description","Test Due Date","Test Prio","Test Notes");
// window.newToDo = newToDo;



window.Task = Task;
window.ToDo = ToDo;
window.Project = Project;
window.populateProject = populateProject;

// should be 'allProjects' array that holds all of the projects, todos, tasks
// a forEach function to print everything to the dom

function testing() {
    const testProject = new Project("Test Project", 
                                "A test project for testing class extensions", 
                                "Due ASAP", 
                                "High Prio", 
                                "Don't Fuck It Up")
    
    testProject.newToDo("Test To Do", 
                        "A test project for testing class extensions", 
                        "Due ASAP", 
                        "High Prio", 
                        "Don't Fuck It Up")
    
    testProject.newToDo("Test To Do 2", 
                        "A test project for testing class extensions", 
                        "Due ASAP", 
                        "High Prio", 
                        "Don't Fuck It Up")
    
    testProject.newToDo("Test To Do 3", 
                        "A test project for testing class extensions", 
                        "Due ASAP", 
                        "High Prio", 
                        "Don't Fuck It Up")

    testProject.todos[1].newTask('Task Name', 'Task Details')

    return testProject;
}

// window.testing = testing();