export function populateProject(obj) {
    const displayArea = document.querySelector(".todos");
    const projectToDos = obj.todos;
    // const toDoTasks = obj.todos.tasks;

    const projectTitle = document.createElement('h2')
    projectTitle.textContent = obj.title 
    
    const myArticle = document.createElement('article') 
    myArticle.appendChild(projectTitle)

    for (const todo of projectToDos) {
        const myH3 = document.createElement('h3')
        const myP1 = document.createElement('p')
        const myP2 = document.createElement('p')
        const myP3 = document.createElement('p')
        const myP4 = document.createElement('p')
        const myList = document.createElement('ul')

        myH3.textContent = todo.title;
        myP1.textContent = todo.description;
        myP2.textContent = todo.dueDate;
        myP3.textContent = todo.priority;
        myP4.textContent = todo.notes;

        if (todo.tasks !== 0 ) {
            for (const task of todo.tasks) {
                const listItem = document.createElement('li');
                const detailList = document.createElement('ul')
                const nestedDetail = document.createElement('li')
    
                listItem.textContent = task.name;
                nestedDetail.textContent = task.detail;
                myList.appendChild(listItem)
                myList.appendChild(detailList);
                detailList.appendChild(nestedDetail);
                
            }
        }

        myArticle.appendChild(myH3)
        myArticle.appendChild(myP1)
        myArticle.appendChild(myP2)
        myArticle.appendChild(myP3)
        myArticle.appendChild(myP4)
        myArticle.appendChild(myList)

        displayArea.appendChild(myArticle)
    }
}
