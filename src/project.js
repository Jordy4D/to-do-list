import { ToDo } from './todo.js'
// import { Task } from './task.js'

console.log('test Project')


export class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }
    
    newToDo(title, description, dueDate, priority) {
        let t = new ToDo(title, description, dueDate, priority)
        this.tasks.push(t)
        return t;
    }

    getTasks() {
        return this.tasks;
        
    }

}