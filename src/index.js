import './style.css';
// import ToDoList from './todo.js';

console.log('test')

const farts = "farting"

class ToDoList{
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
    
    // changeTitle(newTitle) {
    //     this.title.textContent = newTitle;
    // }
    
    // changeDescription(newDescription) {
    //     this.description.textContent = newDescription;
    // }
    
    // changeDueDate(newDueDate) {
    //     this.dueDate.textContent = newDueDate;
    // }
    
    // changePriority(newPrio) {
    //     this.priority.textContent = newPrio;
    // }
    
    // updateNotes(newNotes) {
    //     this.notes.textContent = newNotes;
    // }
    
};

const newToDo = new ToDoList( "Test Title", "Test Description","Test Due Date","Test Prio","Test Notes");

// class Project {
//     // constructor()
// }

// console.log(newToDo);


