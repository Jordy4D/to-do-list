import {Project} from "./project.js"
import { Task } from "./task.js"

import TrashCan from './assets/trash-can-outline.svg'
import EditBtn from './assets/square-edit-outline.svg'
import EditTitle from './assets/rename.svg'


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

    })


    deleteBtn.addEventListener('click', function() {
        let deleteConfirm = confirm('Are you sure you want to delete this task?')
        
        if (deleteConfirm === false) {
            return
        } else {
            let deleteIndex = index - 1
            deleteTask(deleteIndex)
        }
        
    })
    
    
    myP1.addEventListener('click', () => {

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


const newTaskName = document.getElementById('name')
const newTaskDescription = document.getElementById('description')
const newTaskDueDate = document.getElementById('dueDate')
const newTaskPriority = document.getElementById('priority-choice')
const newTaskSubmit = document.getElementById('btn-submit')

const editTaskName = document.getElementById('edit-name')
const editTaskDescription = document.getElementById('edit-description')
const editTaskDueDate = document.getElementById('edit-dueDate')
const editTaskPriority = document.getElementById('edit-priority-choice')
const editTaskFormContainer = document.getElementById('edit-task-form-container')
const editTaskForm = document.getElementById('edit-task-form')
const editTaskSubmit = document.getElementById('edit-task-submit')
const editTaskCloseBtn = document.getElementById('edit-btn-close-popup')

const taskCloseBtn = document.getElementById('btn-close-popup')
const newTaskFormContainer = document.getElementById('new-task-form-container')
const newTaskForm = document.getElementById('new-task-form')


const projectListDisplay = document.getElementById('project-list')
const newProjectName = document.getElementById('new-project') 
const newProjectSubmit = document.getElementById('new-project-init-input')

const tasksTitle = document.getElementById('tasks-title')
const titleEditIcon = document.getElementById('title-edit-icon')
const tasksDisplay = document.getElementById('tasks-display') 
const addTaskBtn = document.getElementById('add-task')


function setStorage() {
    localStorage.setItem("userProjectList", JSON.stringify(projectList));
    localStorage.setItem("currentProjectIndex", JSON.stringify(currentProjectIndex))
}



function renderProjectList() {
    let i = 0;
    
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
    
            p.addEventListener('click', function() {
                currentProjectIndex = p.id
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
    } 

}



function renderProjectTasks(index) {

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

function taskCompleted(index) {
    projectList[currentProjectIndex].tasks[index].changeCompleted()
    projectList[currentProjectIndex].completedTasks.push(projectList[currentProjectIndex].tasks[index])
    
    projectList[currentProjectIndex].tasks.splice(index, 1)
    setStorage();
    
    tasksDisplay.innerHTML = '';
    renderProjectTasks(currentProjectIndex)
}

function taskRestored(index) {
    projectList[currentProjectIndex].completedTasks[index].changeCompleted()
    projectList[currentProjectIndex].tasks.push(projectList[currentProjectIndex].completedTasks[index])
    
    projectList[currentProjectIndex].completedTasks.splice(index, 1)
    setStorage();

    tasksDisplay.innerHTML = '';
    renderProjectTasks(currentProjectIndex)
}



function editTask(task) {

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
    projectList.splice(index, 1)
    projectListDisplay.innerHTML = ''
    
    renderProjectList()
    setStorage();
}







function DomController() {

    
    newProjectSubmit.addEventListener('click', function() {
        let newProj = new Project(newProjectName.value.toString())
        
        if (newProj.name === "" ) {
            alert("Please name your project")
            return
        } 


        projectList.push(newProj)
        
        projectListDisplay.innerHTML = ''
        
        setStorage();
        renderProjectList();
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
        newTaskForm.classList.add('no-form-display')
        newTaskForm.classList.remove('form-display')
        newTaskFormContainer.classList.remove('new-task-form-container-show')
        newTaskFormContainer.classList.add('new-task-form-container')
        
    })
    
    titleEditIcon.addEventListener('click', function() {
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

        
    renderProjectList();
    renderProjectTasks(currentProjectIndex);
    
    return { projectList, projectTaskList, currentProjectIndex }
}

export { DomController }