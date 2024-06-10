//pop up form for new task

function taskPopUpForm() {
    const tasksContainer = document.getElementById('tasks-container')
    const newTaskOverlay = document.createElement('div')
    const newTaskPopupBox = document.createElement('div')
    const newTaskForm = document.createElement('form')
    newTaskOverlay.setAttribute('id', 'newTaskOverlay')
    newTaskPopupBox.setAttribute('class', 'newTaskPopupBox')
    newTaskForm.setAttribute('class', 'newTaskForm')

    tasksContainer.appendChild(newTaskOverlay)
    newTaskOverlay.appendChild(newTaskPopupBox)
    newTaskPopupBox.appendChild(newTaskForm)



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
    taskDueDateInput.setAttribute('placeholder', 'name')
    taskDueDateInput.setAttribute('id', 'dueDate')
    taskDueDateInput.setAttribute('name', 'dueDate')
    taskDueDateInput.required = true;
    

    const taskPriorityDatalist = document.createElement('datalist')
    taskPriorityDatalist.setAttribute('class', 'form-input')
    taskPriorityDatalist.setAttribute('placeholder', 'Priority')
    taskPriorityDatalist.setAttribute('id', 'priority')
    taskPriorityDatalist.setAttribute('name', 'priority')

    const taskPriorityOptionNone = document.createElement('option')
    taskPriorityOptionNone.setAttribute('value', 'None')
    const taskPriorityOptionLow = document.createElement('option')
    taskPriorityOptionLow.setAttribute('value', 'Low')
    const taskPriorityOptionMedium = document.createElement('option')
    taskPriorityOptionMedium.setAttribute('value', 'Medium')
    const taskPriorityOptionHigh = document.createElement('option')
    taskPriorityOptionHigh.setAttribute('value', 'High')

    taskPriorityDatalist.appendChild('taskPriorityOptionNone')
    taskPriorityDatalist.appendChild('taskPriorityOptionLow')
    taskPriorityDatalist.appendChild('taskPriorityOptionMedium')
    taskPriorityDatalist.appendChild('taskPriorityOptionHigh')

    
    
    const taskNameLabel = document.createElement('label')
    taskNameLabel.setAttribute('class', 'form-label')
    taskNameLabel.setAttribute('for', 'name')
    
    const taskDescLabel = document.createElement('label')
    taskDescLabel.setAttribute('class', 'form-label')
    taskDescLabel.setAttribute('for', 'description')
    
    const taskDueDateLabel = document.createElement('label')
    taskDueDateLabel.setAttribute('class', 'form-label')
    taskDueDateLabel.setAttribute('for', 'date')
    
    const taskPriorityLabel = document.createElement('label')
    taskPriorityLabel.setAttribute('class', 'form-label')
    taskPriorityLabel.setAttribute('for', 'priority')    
    
    const newTaskSubmit = document.createElement('button')
    newTaskSubmit.setAttribute('class', 'form-label')
    newTaskSubmit.setAttribute('for', 'name')
    
    
    
    
    taskDescInput.setAttribute('class', 'taskDescInput')
    taskDueDateInput.setAttribute('class', 'taskDueDateInput')
    taskPriorityInput.setAttribute('class', 'taskPriorityInput')
    newTaskSubmit.setAttribute('type', 'submit')
    newTaskSubmit.setAttribute('onclick', 'addNewTask()')

    newTaskForm.appendChild(taskNameInput)
    newTaskForm.appendChild(taskNameLabel)
    newTaskForm.appendChild(taskDescInput)
    newTaskForm.appendChild(taskDescLabel)
    newTaskForm.appendChild(taskDescInput)
    newTaskForm.appendChild(taskDescLabel)
    newTaskForm.appendChild(taskPriorityDatalist)
    newTaskForm.appendChild(taskPriorityLabel)
    newTaskForm.appendChild(newTaskSubmit)



}



function populateProjects() {

}

function displayTask(index, element) {
    const taskDiv = document.createElement('div')
    const myH4 = document.createElement('h4')
    const myP1 = document.createElement('p')
    const myP2 = document.createElement('p')
    const myP3 = document.createElement('p')
    const deleteBtn = document.createElement('button')
    
    taskDiv.classList.add("task")
    myH4.classList.add("task-name")
    myP1.classList.add("task-description")
    myP2.classList.add("task-dueDate")
    myP3.classList.add("task-priority")
    deleteBtn.classList.add('deleteBtn')
    
    
    
    taskDiv.setAttribute("data-index", `${index}`)
    
    
    myH4.textContent = `Name: ${element.title}`;
    myP1.textContent = `Details: ${element.description}`;
    myP2.textContent = `Due: ${element.dueDate}`;
    myP3.textContent = `Priority: ${element.priority}`;
    deleteBtn.textContent = `Delete`
    deleteBtn.setAttribute("onclick", `deleteTask(${index})`);
    
    
    displayArea.appendChild(taskDiv)
    taskDiv.appendChild(myH4)
    taskDiv.appendChild(myP1)
    taskDiv.appendChild(myP2)
    taskDiv.appendChild(myP3)
    taskDiv.appendChild(deleteBtn)


}

function populateTasks(tasks) {
    
    const displayArea = document.querySelector(".todos");
    const tasksHeader = document.createElement('div')
    const addTaskBtn = document.createElement('button')
    const toDoTitle = document.createElement('h3')
    const taskRow = document.createElement('div')
    
    displayArea.innerHTML = '';
    
    tasksHeader.classList.add('tasks-header')
    taskRow.classList.add('taskRow') 
    // const projectTitle = document.createElement('h2')
    // tasksHeader.appendChild(projectTitle)
    addTaskBtn.textContent = '+';
    
    tasksHeader.appendChild(addTaskBtn)
    displayArea.appendChild(tasksHeader)
    
    //change this later
    myArticle.appendChild(toDoTitle)
    
    let index = 0;
    tasks.forEach(element => {
        displayTask(index, element)
        index++
    });

    // myArticle.appendChild(myH4)
    // myArticle.appendChild(myP1)
    // myArticle.appendChild(myP2)
    // myArticle.appendChild(myP3)
    // displayArea.appendChild(myArticle)

}

export { populateTasks, populateProjects }