import * as projectsController from "./APPController.js"
import * as tasksController from "./APPController.js"

import {Project} from "./project.js"
import { Task } from "./task.js"

Object.assign(global, projectsController)
Object.assign(global, tasksController)

// import {Project} from "./project.js"

//pop up form for new task

function taskPopUpForm() {
    const tasksContainer = document.getElementById('tasks-container')
    const newTaskOverlay = document.createElement('div')
    const newTaskPopupBox = document.createElement('div')
    const newTaskForm = document.createElement('form')
    newTaskOverlay.setAttribute('id', 'newTaskOverlay')
    newTaskOverlay.setAttribute('class', 'newTaskOverlay-container')
    newTaskPopupBox.setAttribute('class', 'newTaskPopupBox')
    newTaskForm.setAttribute('class', 'newTaskForm')





    const taskNameInput = document.createElement('input')
    taskNameInput.setAttribute('class', 'form-input')
    taskNameInput.setAttribute('type', 'text')
    taskNameInput.setAttribute('placeholder', 'Task Name')
    taskNameInput.setAttribute('id', 'name')
    taskNameInput.setAttribute('name', 'name')
    taskNameInput.required = true;

    const taskDescInput = document.createElement('input')
    taskDescInput.setAttribute('class', 'form-input')
    taskDescInput.setAttribute('type', 'text')
    taskDescInput.setAttribute('placeholder', 'Task Description')
    taskDescInput.setAttribute('id', 'description')
    taskDescInput.setAttribute('name', 'description')
    taskDescInput.required = true;
    
    const taskDueDateInput = document.createElement('input')
    taskDueDateInput.setAttribute('class', 'form-input')
    taskDueDateInput.setAttribute('type', 'date')
    taskDueDateInput.setAttribute('placeholder', 'Due Date')
    taskDueDateInput.setAttribute('id', 'dueDate')
    taskDueDateInput.setAttribute('name', 'dueDate')
    taskDueDateInput.required = true;
    
    const taskPriorityDataInput = document.createElement('input') 
    taskPriorityDataInput.setAttribute('list', 'priority')

    const taskPriorityDatalist = document.createElement('datalist')
    taskPriorityDatalist.setAttribute('class', 'form-input')
    taskPriorityDatalist.setAttribute('placeholder', 'Priority')
    taskPriorityDatalist.setAttribute('id', 'priority')
    taskPriorityDatalist.setAttribute('name', 'priority')

    const taskPriorityOptionNone = document.createElement('option')
    taskPriorityOptionNone.value = 'None'
    const taskPriorityOptionLow = document.createElement('option')
    taskPriorityOptionLow.value = 'Low'
    const taskPriorityOptionMedium = document.createElement('option')
    taskPriorityOptionMedium.value = 'Medium'
    const taskPriorityOptionHigh = document.createElement('option')
    taskPriorityOptionHigh.value = 'High'  
    

    
    const taskNameLabel = document.createElement('label')
    taskNameLabel.textContent = "Task Name"
    taskNameLabel.setAttribute('class', 'form-label')
    taskNameLabel.setAttribute('for', 'name')
    
    const taskDescLabel = document.createElement('label')
    taskDescLabel.textContent = "Description"
    taskDescLabel.setAttribute('class', 'form-label')
    taskDescLabel.setAttribute('for', 'description')
    
    const taskDueDateLabel = document.createElement('label')
    taskDueDateLabel.textContent = "Due Date"
    taskDueDateLabel.setAttribute('class', 'form-label')
    taskDueDateLabel.setAttribute('for', 'dueDate')
    
    const taskPriorityLabel = document.createElement('label')
    taskPriorityLabel.textContent = "Priority"
    taskPriorityLabel.setAttribute('class', 'form-label')
    taskPriorityLabel.setAttribute('for', 'priority')    
   
    const newTaskSubmit = document.createElement('button')
    newTaskSubmit.textContent = "Add Task"
    newTaskSubmit.setAttribute('class', 'btn-submit')
    
    // newTaskSubmit.setAttribute('for', 'name')
    newTaskSubmit.setAttribute('type', 'submit')
    newTaskSubmit.setAttribute('onclick', 'addNewTask()')

    const closePopUp = document.createElement('button')
    closePopUp.textContent = "Close"
    closePopUp.setAttribute('class', 'btn-close-popup')
    closePopUp.setAttribute('onclick', 'togglePopUpTaskForm()')
    // newTaskSubmit.setAttribute('for', 'name')
    // newTaskSubmit.setAttribute('type', 'submit')
    newTaskSubmit.setAttribute('onclick', 'togglePopUpTaskForm()')
    
    
    
    
    taskDescInput.setAttribute('class', 'taskDescInput')
    taskDueDateInput.setAttribute('class', 'taskDueDateInput')

    tasksContainer.appendChild(newTaskOverlay)
    newTaskOverlay.appendChild(newTaskPopupBox)
    newTaskPopupBox.appendChild(newTaskForm)
    newTaskForm.appendChild(taskNameLabel)
    newTaskForm.appendChild(taskNameInput)
    newTaskForm.appendChild(taskDescLabel)
    newTaskForm.appendChild(taskDescInput)
    newTaskForm.appendChild(taskDueDateLabel)
    newTaskForm.appendChild(taskDueDateInput)
    newTaskForm.appendChild(taskPriorityLabel)
    newTaskForm.appendChild(taskPriorityDataInput)
    newTaskForm.appendChild(taskPriorityDatalist)
    document.getElementById('priority').appendChild(taskPriorityOptionNone)
    document.getElementById('priority').appendChild(taskPriorityOptionLow)
    document.getElementById('priority').appendChild(taskPriorityOptionMedium)
    document.getElementById('priority').appendChild(taskPriorityOptionHigh)
    newTaskForm.appendChild(newTaskSubmit)
    newTaskPopupBox.appendChild(closePopUp)

    return tasksContainer

}




// function renderProjects() {

// }

function displayTask(element, index) {
    const tasksDisplay = document.getElementById('tasks-display') 
    const taskLi = document.createElement('li')
    const myH4 = document.createElement('h4')
    const myP1 = document.createElement('p')
    const myP2 = document.createElement('p')
    const myP3 = document.createElement('p')
    const editBtn = document.createElement('button')
    const deleteBtn = document.createElement('button')
    
    taskLi.classList.add("task")
    taskLi.setAttribute("data-index", `${index}`)
    myH4.classList.add("task-name")
    myP1.classList.add("task-description")
    myP2.classList.add("task-dueDate")
    myP3.classList.add("task-priority")
    editBtn.classList.add('editBtn')
    deleteBtn.classList.add('deleteBtn')
    
    
    
    
    
    myH4.textContent = `Name: ${element.title}`;
    myP1.textContent = `Details: ${element.description}`;
    myP2.textContent = `Due: ${element.dueDate}`;
    myP3.textContent = `Priority: ${element.priority}`;
    editBtn.textContent = `Edit`
    deleteBtn.textContent = `Delete`
    // deleteBtn.setAttribute("onclick", `deleteTask(${index})`);
    // editBtn.setAttribute("onclick", `editTask(${index})`);

    editBtn.addEventListener('click', function() {
        editTask(`${index - 1}`)
        // firing index + 1, not correct so subtracted 1 for workaround ^^^
        editTaskIndex = index - 1
        console.log(`current task index is ${editTaskIndex}` )
    })

    deleteBtn.addEventListener('click', function() {
        // console.log(`delete btn click on task index ${index-1}`)
        
        let deleteIndex = index - 1
        deleteTask(deleteIndex)



    })

    
    // displayArea.appendChild(taskLi)
    tasksDisplay.appendChild(taskLi)
    taskLi.appendChild(myH4)
    taskLi.appendChild(myP1)
    taskLi.appendChild(myP2)
    taskLi.appendChild(myP3)
    taskLi.appendChild(editBtn)
    taskLi.appendChild(deleteBtn)
    index++

}

function renderGUI() {
    const contentContainer = document.getElementById('content')
    const displayArea = document.getElementById("tasks-container");
    const tasksHeader = document.createElement('div')
    const addTaskBtn = document.createElement('button')

    tasksHeader.classList.add('tasks-header')
  
    // const projectTitle = document.createElement('h2')
    // tasksHeader.appendChild(projectTitle)
    addTaskBtn.textContent = '+';
    addTaskBtn.setAttribute('id', 'new-task-btn')
    addTaskBtn.setAttribute('onclick', 'togglePopUpTaskForm()')

    contentContainer.appendChild(displayArea)
    displayArea.appendChild(tasksHeader)
    tasksHeader.appendChild(addTaskBtn)

    return displayArea
}

// function renderTasks(project) {
    
//     const displayArea = document.getElementById("tasks-container");
//     const tasksHeader = document.createElement('div')
//     const addTaskBtn = document.createElement('button')
//     const toDoTitle = document.createElement('h3')
//     const taskRow = document.createElement('div')
    
//     displayArea.innerHTML = '';
    

//     taskRow.classList.add('taskRow') 

    
//     //change this later
//     // myArticle.appendChild(toDoTitle)


//     let index = 0;
//     tasks.forEach(element => {
//         displayTask(index, element)
//         index++
//     });

//     // myArticle.appendChild(myH4)
//     // myArticle.appendChild(myP1)
//     // myArticle.appendChild(myP2)
//     // myArticle.appendChild(myP3)
//     // displayArea.appendChild(myArticle)

// }



const projectList = []
let projectTaskList = []
let currentProjectIndex = 0;
let editTaskIndex

window.projectTaskList = projectTaskList

const newTaskName = document.getElementById('name')
const newTaskDescription = document.getElementById('description')
const newTaskDueDate = document.getElementById('dueDate')
const newTaskPriority = document.getElementById('priority-choice')
const newTaskSubmit = document.getElementById('btn-submit')

const editTaskBtn = document.querySelectorAll('.editBtn')
const editTaskName = document.getElementById('edit-name')
const editTaskDescription = document.getElementById('edit-description')
const editTaskDueDate = document.getElementById('edit-dueDate')
const editTaskPriority = document.getElementById('edit-priority-choice')
const editTaskSubmit = document.getElementById('edit-task-submit')
const taskCloseBtn = document.getElementById('btn-close-popup')
const taskDeleteBtn = document.querySelectorAll('.deleteBtn')

const projectListDisplay = document.getElementById('project-list')
const projectListItem = document.querySelectorAll('li.project-list-item')
const newProjectName = document.getElementById('new-project') 
const newProjectSubmit = document.getElementById('new-project-init-input')

const tasksTitle = document.getElementById('tasks-title')
const tasksDisplay = document.getElementById('tasks-display') 
const addTaskBtn = document.getElementById('add-task')
const ul = document.createElement('ul')



function renderProjectList() {
    let i = 0;
    console.log("current render project list index is " + projectList[currentProjectIndex])

    if (projectList[currentProjectIndex] !== undefined) {
        projectList.forEach((element) => {
            const p = document.createElement('li');
            const pDeleteBtn = document.createElement('button')
            pDeleteBtn.setAttribute('id', `${i}`)
            pDeleteBtn.textContent = `Delete`
            p.setAttribute('class', 'project-list-item')
            p.setAttribute('id', `${i}`)
            p.textContent = element.name;
            // const num = document.querySelectorAll('#id')
    
            //try to move this out of here into separate function
            p.addEventListener('click', function() {
                console.log(`project name click ${p.id}`)
                currentProjectIndex = p.id 
                renderProjectTasks(p.id)
            })
    
            pDeleteBtn.addEventListener('click', function() {
                deleteProject(pDeleteBtn.id)
                // renderProjectList()
            })
    
            p.appendChild(pDeleteBtn)
            projectListDisplay.appendChild(p)
    
            i++
        })
    } else {
        console.log("start a new project")
    }

}



function renderProjectTasks(index) {
    let taskI = 0;
    console.log(currentProjectIndex)

    if (projectList[currentProjectIndex] !== undefined) {
        addTaskBtn.classList.remove('no-display')
        tasksTitle.innerHTML = '';
        tasksTitle.innerHTML = `${projectList[currentProjectIndex].name}`
    
        tasksDisplay.innerHTML = '';
    
        projectList[index].tasks.forEach((element) => {
            displayTask(element, taskI);
    
            taskI++
        })
    } else {
        tasksTitle.innerHTML = '';
        tasksDisplay.innerHTML = '';
        currentProjectIndex = 0;
        tasksTitle.innerHTML = 'Start a New Project To Add To Do Items';
        addTaskBtn.classList.add('no-display')

    }
}


function editTask(task) {
    console.log(`edit task function firing ${task}`)

    editTaskName.value = `${projectList[currentProjectIndex].tasks[task].title}`
    editTaskDescription.value = `${projectList[currentProjectIndex].tasks[task].description}`
    editTaskDueDate.value = `${projectList[currentProjectIndex].tasks[task].dueDate}`
    editTaskPriority.value = `${projectList[currentProjectIndex].tasks[task].priority}`
}

function deleteTask(index) {
    
    projectList[currentProjectIndex].tasks.splice(index, 1)
    renderProjectTasks(currentProjectIndex)

}

function deleteProject(index) {
    projectList.splice(index, 1)
    
    projectListDisplay.innerHTML = ''
    renderProjectList()
    console.log("current project list index is " + `${currentProjectIndex}`)
}


function DomController() {
    // renderGUI();
    
    let currentTaskList = projectTaskList
    
    //not working yet
    // function deleteTask(index) {
    //     projectTaskList[index].innerHTML = '';
    // }

    
    newProjectSubmit.addEventListener('click', function() {
        console.log('New Project Submit Button Works')
        let newProj = new Project(newProjectName.value)
        projectList.push(newProj)
        console.log(projectList)

        projectListDisplay.innerHTML = ''
        
        renderProjectList()
        
    })
        

    newTaskSubmit.addEventListener('click', function(event) {
        event.preventDefault();

        projectList[currentProjectIndex].newTask(newTaskName.value, newTaskDescription.value, newTaskDueDate.value, newTaskPriority.value)
        console.log(projectList[currentProjectIndex].tasks)
        tasksDisplay.innerHTML = '';
        renderProjectTasks(currentProjectIndex)
    })
        
 

    editTaskSubmit.addEventListener('click', function(event) {
        event.preventDefault();
        
        projectList[currentProjectIndex].tasks[editTaskIndex].changeTitle(editTaskName.value)
        projectList[currentProjectIndex].tasks[editTaskIndex].changeDescription(editTaskDescription.value)
        projectList[currentProjectIndex].tasks[editTaskIndex].changeDueDate(editTaskDueDate.value)
        projectList[currentProjectIndex].tasks[editTaskIndex].changePriority(editTaskPriority.value)


        tasksDisplay.innerHTML = '';
        renderProjectTasks(currentProjectIndex)

    })
        
    

    const testProj1 = new Project("Home Chores")
    testProj1.newTask("Mow", "Mow the front yard", "6/13/24", "Medium")
    testProj1.newTask("Mow Again", "Mow the back yard", "6/14/24", "Medium")
    testProj1.newTask("Groceries", "Get this week's groceries", "6/20/24", "High")
    projectList.push(testProj1)

    const testProj2 = new Project("Fun Chores")
    testProj2.newTask("Fart", "Make her day special", "7/13/25", "High")
    testProj2.newTask("Walk the Dog", "Bitch needs to calm down", "8/14/24", "None")
    testProj2.newTask("Code", "Finish this damn To Do List", "7/20/24", "Low")
    projectList.push(testProj2)

    console.log(projectList)
    console.log(projectTaskList)

    renderProjectList();
    renderProjectTasks(currentProjectIndex);
    
    // console.projectsController();
    // console.tasksController();
  
    return { projectList, projectTaskList, currentTaskList }
}

export { DomController }