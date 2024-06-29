import * as projectsController from "./APPController.js"
import * as tasksController from "./APPController.js"

import {Project} from "./project.js"
import { Task } from "./task.js"

import TrashCan from './assets/trash-can-outline.svg'
import EditBtn from './assets/square-edit-outline.svg'
import EditTitle from './assets/rename.svg'

Object.assign(global, projectsController)
Object.assign(global, tasksController)

// import {Project} from "./project.js"

//pop up form for new task

// function taskPopUpForm() {
//     const tasksContainer = document.getElementById('tasks-container')
//     const newTaskOverlay = document.createElement('div')
//     const newTaskPopupBox = document.createElement('div')
//     const newTaskForm = document.createElement('form')
//     newTaskOverlay.setAttribute('id', 'newTaskOverlay')
//     newTaskOverlay.setAttribute('class', 'newTaskOverlay-container')
//     newTaskPopupBox.setAttribute('class', 'newTaskPopupBox')
//     newTaskForm.setAttribute('class', 'newTaskForm')





//     const taskNameInput = document.createElement('input')
//     taskNameInput.setAttribute('class', 'form-input')
//     taskNameInput.setAttribute('type', 'text')
//     taskNameInput.setAttribute('placeholder', 'Task Name')
//     taskNameInput.setAttribute('id', 'name')
//     taskNameInput.setAttribute('name', 'name')
//     taskNameInput.required = true;

//     const taskDescInput = document.createElement('input')
//     taskDescInput.setAttribute('class', 'form-input')
//     taskDescInput.setAttribute('type', 'text')
//     taskDescInput.setAttribute('placeholder', 'Task Description')
//     taskDescInput.setAttribute('id', 'description')
//     taskDescInput.setAttribute('name', 'description')
//     taskDescInput.required = true;
    
//     const taskDueDateInput = document.createElement('input')
//     taskDueDateInput.setAttribute('class', 'form-input')
//     taskDueDateInput.setAttribute('type', 'date')
//     taskDueDateInput.setAttribute('placeholder', 'Due Date')
//     taskDueDateInput.setAttribute('id', 'dueDate')
//     taskDueDateInput.setAttribute('name', 'dueDate')
//     taskDueDateInput.required = true;
    
//     const taskPriorityDataInput = document.createElement('input') 
//     taskPriorityDataInput.setAttribute('list', 'priority')

//     const taskPriorityDatalist = document.createElement('datalist')
//     taskPriorityDatalist.setAttribute('class', 'form-input')
//     taskPriorityDatalist.setAttribute('placeholder', 'Priority')
//     taskPriorityDatalist.setAttribute('id', 'priority')
//     taskPriorityDatalist.setAttribute('name', 'priority')

//     const taskPriorityOptionNone = document.createElement('option')
//     taskPriorityOptionNone.value = 'None'
//     const taskPriorityOptionLow = document.createElement('option')
//     taskPriorityOptionLow.value = 'Low'
//     const taskPriorityOptionMedium = document.createElement('option')
//     taskPriorityOptionMedium.value = 'Medium'
//     const taskPriorityOptionHigh = document.createElement('option')
//     taskPriorityOptionHigh.value = 'High'  
    

    
//     const taskNameLabel = document.createElement('label')
//     taskNameLabel.textContent = "Task Name"
//     taskNameLabel.setAttribute('class', 'form-label')
//     taskNameLabel.setAttribute('for', 'name')
    
//     const taskDescLabel = document.createElement('label')
//     taskDescLabel.textContent = "Description"
//     taskDescLabel.setAttribute('class', 'form-label')
//     taskDescLabel.setAttribute('for', 'description')
    
//     const taskDueDateLabel = document.createElement('label')
//     taskDueDateLabel.textContent = "Due Date"
//     taskDueDateLabel.setAttribute('class', 'form-label')
//     taskDueDateLabel.setAttribute('for', 'dueDate')
    
//     const taskPriorityLabel = document.createElement('label')
//     taskPriorityLabel.textContent = "Priority"
//     taskPriorityLabel.setAttribute('class', 'form-label')
//     taskPriorityLabel.setAttribute('for', 'priority')    
   
//     const newTaskSubmit = document.createElement('button')
//     newTaskSubmit.textContent = "Add Task"
//     newTaskSubmit.setAttribute('class', 'btn-submit')
    
//     // newTaskSubmit.setAttribute('for', 'name')
//     newTaskSubmit.setAttribute('type', 'submit')
//     newTaskSubmit.setAttribute('onclick', 'addNewTask()')

//     const closePopUp = document.createElement('button')
//     closePopUp.textContent = "Close"
//     closePopUp.setAttribute('class', 'btn-close-popup')
//     closePopUp.setAttribute('onclick', 'togglePopUpTaskForm()')
//     // newTaskSubmit.setAttribute('for', 'name')
//     // newTaskSubmit.setAttribute('type', 'submit')
//     newTaskSubmit.setAttribute('onclick', 'togglePopUpTaskForm()')
    
    
    
    
//     taskDescInput.setAttribute('class', 'taskDescInput')
//     taskDueDateInput.setAttribute('class', 'taskDueDateInput')

//     tasksContainer.appendChild(newTaskOverlay)
//     newTaskOverlay.appendChild(newTaskPopupBox)
//     newTaskPopupBox.appendChild(newTaskForm)
//     newTaskForm.appendChild(taskNameLabel)
//     newTaskForm.appendChild(taskNameInput)
//     newTaskForm.appendChild(taskDescLabel)
//     newTaskForm.appendChild(taskDescInput)
//     newTaskForm.appendChild(taskDueDateLabel)
//     newTaskForm.appendChild(taskDueDateInput)
//     newTaskForm.appendChild(taskPriorityLabel)
//     newTaskForm.appendChild(taskPriorityDataInput)
//     newTaskForm.appendChild(taskPriorityDatalist)
//     document.getElementById('priority').appendChild(taskPriorityOptionNone)
//     document.getElementById('priority').appendChild(taskPriorityOptionLow)
//     document.getElementById('priority').appendChild(taskPriorityOptionMedium)
//     document.getElementById('priority').appendChild(taskPriorityOptionHigh)
//     newTaskForm.appendChild(newTaskSubmit)
//     newTaskPopupBox.appendChild(closePopUp)

//     return tasksContainer

// }




// function renderProjects() {

// }

function displayTask(element, index) {
    const tasksDisplay = document.getElementById('tasks-display') 
    const taskLi = document.createElement('li')
    const completedCheck = document.createElement('input')
    const myH4 = document.createElement('h4')
    const myP1 = document.createElement('p')
    const myP2 = document.createElement('p')
    const myP3 = document.createElement('p')
    const editBtn = document.createElement('img')
    const deleteBtn = document.createElement('img')
    
    taskLi.classList.add("task")
    taskLi.setAttribute("data-index", `${index}`)
    completedCheck.setAttribute('type', 'checkbox')
    completedCheck.setAttribute('class', "completedCheck")
    myH4.classList.add("task-name")
    myH4.classList.add("name-hide")
    myP1.classList.add("task-description")
    myP1.classList.add('description-hide')

    myP2.classList.add("task-dueDate")
    myP3.classList.add("task-priority")
    editBtn.classList.add('editBtn')
    editBtn.setAttribute('id', "editBtn")
    deleteBtn.classList.add('deleteBtn')
    
    
    if (element.complete === true) {
        completedCheck.setAttribute('checked', 'checked')
        taskLi.classList.add('completed')
    }
    myH4.textContent = `${element.title}`;
    myP1.textContent = `${element.description}`;
    myP2.textContent = `${element.dueDate}`;
    myP3.textContent = `${element.priority}`;
    editBtn.src = EditBtn
    deleteBtn.src = TrashCan
    // deleteBtn.setAttribute("onclick", `deleteTask(${index})`);
    // editBtn.setAttribute("onclick", `editTask(${index})`);

    
    // completedCheck.addEventListener('click', function() {
    //     taskCompleted(index - 1);
    //     setStorage();

    switch (myP3.textContent) {
        case "Low":
            myP3.setAttribute("class", "task-priority")
            myP3.classList.add('low-prio')
            break;
        case "Medium":
            myP3.setAttribute("class", "task-priority")
            myP3.classList.add('med-prio')
            break;
        case "High":
            myP3.setAttribute("class", "task-priority")
            myP3.classList.add('high-prio')
            break;
        case "None":
            myP3.setAttribute("class", "task-priority")
            myP3.classList.add('no-prio')
            break;
        }


    //     console.log(projectList)
    //     console.log(projectList[currentProjectIndex])

    // })



    completedCheck.addEventListener('click', function() {
        // const checkIndex = index - 1
        
        if (taskLi.classList.contains('completed')) {
            taskLi.classList.remove('completed')
            taskRestored(element.taskIndex);

            
        } else {
            taskLi.classList.add('completed')
            taskCompleted(element.taskIndex);
        }
        
        setStorage();
    })

    editBtn.addEventListener('click', function() {
        editTaskFormContainer.classList.add('edit-task-form-container-show')
        editTaskFormContainer.classList.remove('edit-task-form-container')
        editTaskForm.classList.remove('no-form-display')
        editTaskForm.classList.add('form-display')

        editTask(`${index - 1}`)
        // firing index + 1, not correct so subtracted 1 for workaround ^^^
        editTaskIndex = index - 1
        console.log(`current task index is ${editTaskIndex}` )



    })

    deleteBtn.addEventListener('click', function() {
        // console.log(`delete btn click on task index ${index-1}`)
        let deleteConfirm = confirm('Are you sure you want to delete this task?')
        
        if (deleteConfirm === false) {
            return
        } else {
            let deleteIndex = index - 1
            deleteTask(deleteIndex)
        }
        
    })
    
    
    myP1.addEventListener('click', () => {
        // const wasExpanded = taskLi.classList.contains('taskExpand')

        if (taskLi.classList.contains('taskExpand')) {
            taskLi.classList.remove('taskExpand')
            myP1.classList.add('description-hide')
            myH4.classList.add("name-hide")

        } else {
            taskLi.classList.add('taskExpand')
            myP1.classList.remove('description-hide')
            myH4.classList.remove("name-hide")
            
        }
    })
    

    // displayArea.appendChild(taskLi)
    tasksDisplay.appendChild(taskLi)
    taskLi.appendChild(completedCheck)
    taskLi.appendChild(myH4)
    taskLi.appendChild(myP1)
    taskLi.appendChild(myP2)
    taskLi.appendChild(myP3)
    taskLi.appendChild(editBtn)
    taskLi.appendChild(deleteBtn)
    index++

}




var projectList = localStorage.userProjectList ? JSON.parse(localStorage.userProjectList) : [
    {
        name: "Example Project",
        dataName: "example project",
        tasks: [
            {
                title: "Low Priority Task",
                description: "An example low-priority task",
                dueDate: "2024-06-25",
                priority: "Low",
                complete: false
            },
            {
                title: "Medium Priority Task",
                description: "An example medium-priority task",
                dueDate: "2024-06-26",
                priority: "Medium",
                complete: false

            },
            {
                title: "High Priority Task Example To Showcase Overflow",
                description: "This is an example of a high-priority task and also one that shows an overflow example for the name and description",
                dueDate: "2024-06-28",
                priority: "High",
                complete: false
            },
            {
                title: "No Priority Task",
                description: "A task that has no priority",
                dueDate: "2024-06-28",
                priority: "None",
                complete: false
            }
        ],
        completedTasks: []
    }
];
let projectTaskList = []
let currentProjectIndex = localStorage.currentProjectIndex ? JSON.parse(localStorage.currentProjectIndex) : 0;
let editTaskIndex


// window.currentProjectIndex = currentProjectIndex;
window.projectTaskList = projectTaskList;
window.projectList = projectList;


const newTaskName = document.getElementById('name')
const newTaskDescription = document.getElementById('description')
const newTaskDueDate = document.getElementById('dueDate')
const newTaskPriority = document.getElementById('priority-choice')
const newTaskSubmit = document.getElementById('btn-submit')

const editTaskBtn = document.getElementById('editBtn')
const editTaskName = document.getElementById('edit-name')
const editTaskDescription = document.getElementById('edit-description')
const editTaskDueDate = document.getElementById('edit-dueDate')
const editTaskPriority = document.getElementById('edit-priority-choice')
const editTaskFormContainer = document.getElementById('edit-task-form-container')
const editTaskForm = document.getElementById('edit-task-form')
const editTaskSubmit = document.getElementById('edit-task-submit')
const editTaskCloseBtn = document.getElementById('edit-btn-close-popup')

const taskCloseBtn = document.getElementById('btn-close-popup')
const taskDeleteBtn = document.querySelectorAll('.deleteBtn')
const newTaskFormContainer = document.getElementById('new-task-form-container')
const newTaskForm = document.getElementById('new-task-form')


const projectListDisplay = document.getElementById('project-list')
const projectListItem = document.querySelectorAll('li.project-list-item')
const newProjectName = document.getElementById('new-project') 
const newProjectSubmit = document.getElementById('new-project-init-input')

const tasksTitle = document.getElementById('tasks-title')
const titleEditIcon = document.getElementById('title-edit-icon')
const tasksTitleCombo = document.getElementById('task-title-icon-combo')
const tasksDisplay = document.getElementById('tasks-display') 
const addTaskBtn = document.getElementById('add-task')
const ul = document.createElement('ul')

function setStorage() {
    localStorage.setItem("userProjectList", JSON.stringify(projectList));
    localStorage.setItem("currentProjectIndex", JSON.stringify(currentProjectIndex))
    console.log('set storage was fired')
}

// function setUserProject() {
//     projectList = localStorage.getItem("userProjectList")
//     return projectList
// }


function renderProjectList() {
    let i = 0;
    console.log("current render project list index is " + projectList[currentProjectIndex])
    
    if (projectList && projectList.length) {
        projectListDisplay.innerHTML = '';
        projectList.forEach((element) => {
            const p = document.createElement('li');
            const pDeleteBtn = document.createElement('img')
            pDeleteBtn.setAttribute('class', `delete-project-btn`)
            pDeleteBtn.setAttribute('id', `${i}`)
            pDeleteBtn.src = TrashCan
            p.setAttribute('class', 'project-list-item')
            p.setAttribute('id', `${i}`)
            p.textContent = element.name;
            // const num = document.querySelectorAll('#id')
    
            //try to move this out of here into separate function
            p.addEventListener('click', function() {
                currentProjectIndex = p.id
                console.log(`current project index is ${currentProjectIndex}`)
                // projectIndex = p.id
                renderProjectTasks(p.id)
                setStorage();
            })
    
            pDeleteBtn.addEventListener('click', function() {
                let deleteConfirm = confirm('Are you sure you want to delete this task?')
        
                if (deleteConfirm === false) {
                    return
                } else {
                    let deleteIndex = currentProjectIndex - 1
                    deleteProject(pDeleteBtn.id)
                    renderProjectTasks(deleteIndex)
                }
                
                
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
    console.log(currentProjectIndex)

    if (projectList[currentProjectIndex] !== undefined) {
        let taskI = 0;
        let completedTaskI = 0;
        addTaskBtn.classList.remove('no-display')
        titleEditIcon.classList.remove('no-display')
        tasksTitle.classList.remove('noClick')
        tasksTitle.innerHTML = '';
        tasksTitle.innerHTML = `${projectList[index].name}`
        titleEditIcon.src = EditTitle
    
        tasksDisplay.innerHTML = '';
    
        projectList[index].tasks.forEach((element) => {

            displayTask(element, taskI);
            element.taskIndex = taskI;
            taskI++

        })
        projectList[index].completedTasks.forEach((element) => {

            displayTask(element, completedTaskI);
            element.taskIndex = completedTaskI;
            completedTaskI++

  
        })

    } else {
        tasksTitle.innerHTML = '';
        tasksDisplay.innerHTML = '';
        currentProjectIndex = 0;
        tasksTitle.innerHTML = 'Choose a Project or Start a New Project';
        titleEditIcon.classList.add('no-display')
        addTaskBtn.classList.add('no-display')
        tasksTitle.classList.add('noClick')

        
    }
}

// function taskCompleted(index) {
//     projectList[currentProjectIndex].tasks[index].changeCompleted()
// }

function taskCompleted(index) {
    projectList[currentProjectIndex].tasks[index].changeCompleted()
    projectList[currentProjectIndex].completedTasks.push(projectList[currentProjectIndex].tasks[index])
    
    projectList[currentProjectIndex].tasks.splice(index, 1)
    setStorage();
    
    console.log(projectList)
    console.log(projectList[currentProjectIndex])
    tasksDisplay.innerHTML = '';
    renderProjectTasks(currentProjectIndex)
}

function taskRestored(index) {
    projectList[currentProjectIndex].completedTasks[index].changeCompleted()
    projectList[currentProjectIndex].tasks.push(projectList[currentProjectIndex].completedTasks[index])
    
    projectList[currentProjectIndex].completedTasks.splice(index, 1)
    setStorage();

    console.log(projectList)
    console.log(projectList[currentProjectIndex])
    tasksDisplay.innerHTML = '';
    renderProjectTasks(currentProjectIndex)
}



function editTask(task) {
    console.log(`edit task function firing ${task}`)

    editTaskName.value = `${projectList[currentProjectIndex].tasks[task].title}`
    editTaskDescription.value = `${projectList[currentProjectIndex].tasks[task].description}`
    editTaskDueDate.value = `${projectList[currentProjectIndex].tasks[task].dueDate}`
    editTaskPriority.value = `${projectList[currentProjectIndex].tasks[task].priority}`
    setStorage();
}

function deleteTask(index) {
    
    projectList[currentProjectIndex].tasks.splice(index, 1)
    setStorage();
    renderProjectTasks(currentProjectIndex)
    

}

function deleteProject(index) {
    console.log(`the project "` + projectList[index].name + `" was removed`)
    projectList.splice(index, 1)
    projectListDisplay.innerHTML = ''
    // currentProjectIndex = index - 1
    // renderProjectTasks(index - 1)
    
    renderProjectList()
    // renderProjectTasks(currentProjectIndex);
    
    setStorage();
}







function DomController() {
    // if (!localStorage.getItem("userProjectList")) {
        //     projectList = []
    // } else {
        //     setUserProject();
    // }

    
    
   

    let currentTaskList = projectTaskList
    
    
    newProjectSubmit.addEventListener('click', function() {
        console.log('New Project Submit Button Works')
        let newProj = new Project(newProjectName.value.toString())
        
        if (newProj.name === "" ) {
            alert("Please name your project")
            return
        } 


        projectList.push(newProj)
        console.log(projectList)
        
        projectListDisplay.innerHTML = ''
        
        setStorage();
        renderProjectList();
        // renderProjectTasks();
    })
    
    
    newTaskSubmit.addEventListener('click', function(event) {
        event.preventDefault();
        
        if (newTaskName.value === '' ||
            newTaskDescription.value === '' ||
            newTaskDueDate.value === '' ||
            newTaskPriority.value === '') {
                alert('please complete all fields of your task')
                return
            }
            
        projectList[currentProjectIndex].newTask(newTaskName.value, 
                                                newTaskDescription.value, 
                                                newTaskDueDate.value, 
                                                newTaskPriority.value)
        console.log(projectList[currentProjectIndex].tasks)
        tasksDisplay.innerHTML = '';
            
        renderProjectTasks(currentProjectIndex)
        
        newTaskForm.classList.add('no-form-display')
        newTaskForm.classList.remove('form-display')
        newTaskFormContainer.classList.remove('new-task-form-container-show')
        newTaskFormContainer.classList.add('new-task-form-container')
        
        setStorage();
    })
    
    addTaskBtn.addEventListener('click', function() {
        newTaskFormContainer.classList.add('new-task-form-container-show')
        newTaskFormContainer.classList.remove('new-task-form-container')
        
        newTaskForm.classList.remove('no-form-display')
        newTaskForm.classList.add('form-display')
        
    })
    
    taskCloseBtn.addEventListener('click', function() {
        console.log('close button works!')
        newTaskForm.classList.add('no-form-display')
        newTaskForm.classList.remove('form-display')
        newTaskFormContainer.classList.remove('new-task-form-container-show')
        newTaskFormContainer.classList.add('new-task-form-container')
        
    })
    
    titleEditIcon.addEventListener('click', function() {
        console.log('project title click')
        let newProjName = prompt('rename your project', projectList[currentProjectIndex].name)
        if (newProjName === null) {
            return
        } else {
            projectList[currentProjectIndex].changeProjectName(newProjName)

        }
        setStorage();
        renderProjectTasks(currentProjectIndex);
        renderProjectList();
    })
    
    editTaskSubmit.addEventListener('click', function(event) {
        event.preventDefault();
        
        if (editTaskName.value === '' ||
            editTaskDescription.value === '' ||
            editTaskDueDate.value === '' ||
            editTaskPriority.value === '') {
                alert('please complete all fields of your task')
                return
            }
            
        projectList[currentProjectIndex].tasks[editTaskIndex].changeTitle(editTaskName.value)
        projectList[currentProjectIndex].tasks[editTaskIndex].changeDescription(editTaskDescription.value)
        projectList[currentProjectIndex].tasks[editTaskIndex].changeDueDate(editTaskDueDate.value)
        projectList[currentProjectIndex].tasks[editTaskIndex].changePriority(editTaskPriority.value)
            
        setStorage();
        tasksDisplay.innerHTML = '';
        renderProjectTasks(currentProjectIndex)
        
        editTaskFormContainer.classList.remove('edit-task-form-container-show')
        editTaskFormContainer.classList.add('edit-task-form-container')
        editTaskForm.classList.add('no-form-display')
        editTaskForm.classList.remove('form-display')
        
    })
        
    editTaskCloseBtn.addEventListener('click', function() {
        editTaskFormContainer.classList.remove('edit-task-form-container-show')
        editTaskFormContainer.classList.add('edit-task-form-container')
        editTaskForm.classList.add('no-form-display')
        editTaskForm.classList.remove('form-display')
        
    })


    // projectList[index].tasks.forEach((task) => {
    //     const taskLi = task.querySelector('.task')

    //     task.addEventListener('click', (event) => {
    //         const wasActive = task.classList.contains('active')
            
    //         projectList[index].tasks.forEach((task) => {
    //             task.classList.remove('active');
    //         })
    //         if (!wasActive) {
    //             task.classList.add('active')
    //         }
            
    //     })

    // })
        
    
    


    function newTask(title, description, dueDate, priority) {
        let t = new Task(title, description, dueDate, priority);
        this.tasks.push(t);
        return t;
    }

    function changeProjectName(newName) {
        this.name = newName;
    }

    
    
    function changeTitle(newTitle) {
        this.title = newTitle;
    }
    
    function changeDescription(newDescription) {
        this.description = newDescription;
    }
    
    function changeDueDate(newDueDate) {
        this.dueDate = newDueDate;
        }
        
        function changePriority(newPrio) {
        this.priority = newPrio;
        }
        
    function changeCompleted() {
        if (this.complete === false) {
            this.complete = true
            } else 
            this.complete = false
            }

    projectList.forEach(obj => {
        obj.newTask = newTask;
        obj.changeProjectName = changeProjectName;
    })
            
    for (let project in projectList) {
        projectList[project].tasks.forEach(obj => {
            obj.changeTitle = changeTitle;
            obj.changeDescription = changeDescription;
            obj.changeDueDate = changeDueDate;
            obj.changePriority = changePriority;
            obj.changeCompleted = changeCompleted;
        })
        projectList[project].completedTasks.forEach(obj => {
            obj.changeTitle = changeTitle;
            obj.changeDescription = changeDescription;
            obj.changeDueDate = changeDueDate;
            obj.changePriority = changePriority;
            obj.changeCompleted = changeCompleted;
        })
    }

    
    console.log(projectList)
    console.log(projectList[currentProjectIndex])
        
    renderProjectList();
    renderProjectTasks(currentProjectIndex);
    // setStorage()
    
    // console.projectsController();
    // console.tasksController();
    
    return { projectList, projectTaskList, currentTaskList, currentProjectIndex }
}

export { DomController }