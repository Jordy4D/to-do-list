//pop up form for new task


function populateTasks(project) {
    
    const displayArea = document.querySelector(".todos");
    displayArea.innerHTML = '';
    const tasksHeader = document.createElement('div')
    tasksHeader.classList.add('tasks-header')

    const projectTitle = document.createElement('h2')
    const addTask = document.createElement('button')
    addTask.textContent = '+';
    projectTitle.textContent = project.name;
    
    tasksHeader.appendChild(projectTitle)
    tasksHeader.appendChild(addTask)
    displayArea.appendChild(tasksHeader)

    const toDoTitle = document.createElement('h3')

    //change this later
    const myArticle = document.createElement('article') 
    myArticle.appendChild(toDoTitle)
    let index = 0;
    project.getTasks().forEach(element => {
        const task = document.createElement('div')
        task.classList.add("task")
        task.setAttribute("data-index", `${index}`)
        
        const myH4 = document.createElement('h4')
        myH4.classList.add("task-name")
        index++

        const myP1 = document.createElement('p')
        myP1.classList.add("task-description")

        const myP2 = document.createElement('p')
        myP2.classList.add("task-dueDate")

        const myP3 = document.createElement('p')
        myP3.classList.add("task-priority")

        const deleteBtn = document.createElement('button')
        deleteBtn.classList.add('deleteBtn')

        myH4.textContent = `Name: ${element.title}`;
        myP1.textContent = `Details: ${element.description}`;
        myP2.textContent = `Due: ${element.dueDate}`;
        myP3.textContent = `Priority: ${element.priority}`;
        deleteBtn.textContent = `Delete`
        deleteBtn.setAttribute("onclick", "deleteTask()");


        displayArea.appendChild(task)
        task.appendChild(myH4)
        task.appendChild(myP1)
        task.appendChild(myP2)
        task.appendChild(myP3)
        task.appendChild(deleteBtn)

    });

    // myArticle.appendChild(myH4)
    // myArticle.appendChild(myP1)
    // myArticle.appendChild(myP2)
    // myArticle.appendChild(myP3)
    // displayArea.appendChild(myArticle)

}

export { populateTasks }