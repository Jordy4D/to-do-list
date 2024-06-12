import { Project } from './project.js'
import { Task } from './task.js'


function projectsController() {
    let projectsArr = [];
    let currentProjectTasks = []

    const getCurrentProject = (index) => {
        return projectsArr[index];
    }

    const getAllProjects = () => {
        console.log(projectsArr)
        return projectsArr;
    }

    const addNewProject = (name) => {
        let p = new Project (name)
        projectsArr.push(p)
        console.log(projectsArr)
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
    let tasksArr = projectsController.currentProjectTasks

    const changeTaskTitle = (index, newTitle) => {
        tasksArr[index].title = newTitle;
    }
    
    const changeDescription = (index, newDescription) => {
        tasksArr[index].description = newDescription;
    }
    
    const changeDueDate = (index, newDueDate) => {
        tasksArr[index].dueDate = newDueDate;
    }
    
    const changePriority = (index, newPrio) => {
        tasksArr[index].priority = newPrio;
    }

    const changeComplete = (boolean) => {
        tasksArr[index].complete = boolean
    }

    return {changeTaskTitle, changeDescription, changeDueDate, changePriority, changeComplete }
}

 


export { projectsController, tasksController }