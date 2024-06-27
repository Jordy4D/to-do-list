import { Task } from './task.js'

console.log('test Project')


export class Project {
    constructor(name) {
        this.name = name;
        this.dataName = name.toLowerCase();
        this.tasks = [];
        this.completedTasks = [];
    }

    newTask(title, description, dueDate, priority) {
        let t = new Task(title, description, dueDate, priority);
        this.tasks.push(t);
        return t;
    }

    changeProjectName(newName) {
        this.name = newName;
    }

    getTasks() {
        return this.tasks;
        
    }

    

}

