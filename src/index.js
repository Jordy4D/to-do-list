import './style.css';

class ToDoList {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
    
    getDueDate() {
        //do stuff
    }

    getPriority() {
        //do stuff
    }

    updateNotes() {
        //do stuff
    }

}

// class Project {
//     // constructor()
// }

const div = document.createElement('div');
const test = document.createElement('h1');

test.textContent = "test"
document.body.appendChild(test)

console.log('test');

