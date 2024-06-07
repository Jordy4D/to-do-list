// import { ToDo } from "./todoDELETE.js";


console.log('test To Do');


export class ToDo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        // this.notes = notes;
        // this.todos = [];
    }
    
    changeTitle(newTitle) {
        this.title = newTitle;
    }
    
    changeDescription(newDescription) {
        this.description = newDescription;
    }
    
    changeDueDate(newDueDate) {
        this.dueDate = newDueDate;
    }
    
    changePriority(newPrio) {
        this.priority = newPrio;
    }
    
    // updateNotes(newNotes) {
    //     this.notes = newNotes;
    // }

    // newToDo(title, description, dueDate, priority, notes) {
    //     let t = new ToDo(title, description, dueDate, priority, notes)
    //     this.todos.push(t)
    //     return t;
    // }

    // getToDos() {
    //     console.log(this.todos)
    // }b
    
};