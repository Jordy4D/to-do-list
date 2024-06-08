// import { ToDo } from "./todoDELETE.js";


console.log('test To Do');


export class ToDo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;

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
    

};