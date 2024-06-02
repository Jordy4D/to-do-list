import './style.css';
import ToDoList from './todo.js';

// const newToDo = new ToDoList( "Test Title", "Test Description","Test Due Date","Test Prio","Test Notes");


const btn = document.getElementById('home')

btn.addEventListener('click', function () {
    let titlePrompt = prompt("What is the title of you ToDo?")
    let descriptionPrompt = prompt("What is the description of you ToDo?")
    let dueDatePrompt = prompt("What is the due date of you ToDo?")
    let priorityPrompt = prompt("What is the priority of you ToDo?")
    let notesPrompt = prompt("What notes do you need to add to you ToDo?")

    let newToDo = new ToDoList(titlePrompt, descriptionPrompt, dueDatePrompt,
                            priorityPrompt, notesPrompt)

    console.log(newToDo)
})

// class Project {
//     // constructor()
// }

// console.log(newToDo);


