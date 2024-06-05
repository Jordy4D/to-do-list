import { Project } from './project.js'
import { Task } from './task.js'

console.log('test To Do')


export class ToDo extends Project {
    constructor(title, description, dueDate, priority, notes) {
        super(title, description, dueDate, priority, notes)
        this.tasks = [];
    }
    
    newTask(name, detail) {
        let t = new Task(name, detail)
        this.tasks.push(t)
        return t;
    }

    getTasks() {
        console.log(this.tasks)
    }


}