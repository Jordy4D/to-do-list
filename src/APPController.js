import { Project } from './project.js'
import { Task } from './task.js'


function projectsController() {
    let activeProjects = [];
    let currentProjectTasks = []

    const getCurrentProject = (index) => {
        return activeProjects[index];
    }

    const getAllProjects = () => {
        console.log(activeProjects)
        return activeProjects;
    }

    const addNewProject = (name) => {
        let p = new Project (name)
        activeProjects.push(p)
        console.log(activeProjects)
    }

    const getProjectTasks = () => {
        return currentProjectTasks
    }

    const getTask = (index) => {
        return currentProjectTasks[index]
    }

    const addNewTask = (title, description, dueDate, priority) => {
        let t = new Task(title, description, dueDate, priority)
        currentProjectTasks.push(t)
        console.log(currentProjectTasks)
    }

    return { getCurrentProject, getAllProjects, addNewProject, getProjectTasks, getTask, addNewTask }
}
 
function tasksController() {
    let currentTasks = projectsController.currentProjectTasks

    const changeTaskTitle = (index, newTitle) => {
        currentTasks[index].title = newTitle;
    }
    
    const changeDescription = (index, newDescription) => {
        currentTasks[index].description = newDescription;
    }
    
    const changeDueDate = (index, newDueDate) => {
        currentTasks[index].dueDate = newDueDate;
    }
    
    const changePriority = (index, newPrio) => {
        currentTasks[index].priority = newPrio;
    }

    const changeComplete = (boolean) => {
        currentTasks[index].complete = boolean
    }

    return {changeTaskTitle, changeDescription, changeDueDate, changePriority, changeComplete }
}

 


export { projectsController, tasksController }