import { Task } from './task.js'

console.log('test Project')


export class Project {
    constructor(name) {
        this.name = name;
        this.dataName = name.toLowerCase();
        this.tasks = [];
    }

    getTasks() {
        return this.tasks;
        
    }

    

}

