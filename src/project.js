import { Task } from './task.js'

console.log('test Project')


export class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }
    
    newTask(title, description, dueDate, priority) {
        let t = new Task(title, description, dueDate, priority)
        this.tasks.push(t)
        return t;
    }

    getTasks() {
        return this.tasks;
        
    }

    changeName(newName) {
        this.name = newName;
    }

    // deleteTask() {

    // }

}
