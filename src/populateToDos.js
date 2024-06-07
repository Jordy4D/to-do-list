export function populateToDos(project) {
    
    const displayArea = document.querySelector(".todos");
    displayArea.innerHTML = '';
    const projectTitle = document.createElement('h1')
    projectTitle.textContent = project.name;

    const toDoTitle = document.createElement('h2')

    //change this later
    const myArticle = document.createElement('article') 
    myArticle.appendChild(toDoTitle)
    
    project.getTasks().forEach(element => {
        const myH3 = document.createElement('h3')
        const myP1 = document.createElement('p')
        const myP2 = document.createElement('p')
        const myP3 = document.createElement('p')
        const myP4 = document.createElement('p')

        myH3.textContent = `Name: ${element.title}`;
        myP1.textContent = `Details: ${element.description}`;
        myP2.textContent = `Due: ${element.dueDate}`;
        myP3.textContent = `Priority: ${element.priority}`;

        myArticle.appendChild(myH3)
        myArticle.appendChild(myP1)
        myArticle.appendChild(myP2)
        myArticle.appendChild(myP3)
    });

    // myArticle.appendChild(myH3)
    // myArticle.appendChild(myP1)
    // myArticle.appendChild(myP2)
    // myArticle.appendChild(myP3)
    displayArea.appendChild(projectTitle)
    displayArea.appendChild(myArticle)

}