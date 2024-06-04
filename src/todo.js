// import { Project } from './project.js'
import { Task } from './task.js'

console.log('test To Do')

export class ToDo{
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.tasks = [];
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
    
    updateNotes(newNotes) {
        this.notes = newNotes;
    }

    newTask(name, detail) {
        let t = new Task(name, detail)
        this.tasks.push(t)
        return t;
    }

    getTasks() {
        console.log(this.tasks)
    }
    
};

// export class ToDo extends Project {
//     constructor(title, description, dueDate, priority, notes) {
//         super(title, description, dueDate, priority, notes)
//         this.tasks = [];
//     }
    
//     newTask(name, detail) {
//         let t = new Task(name, detail)
//         this.tasks.push(t)
//         return t;
//     }

//     getTasks() {
//         console.log(this.tasks)
//     }


// }