console.log('test To Do');


export class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = false;
        this.taskIndex;
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

    changeCompleted() {
        if (this.complete === false) {
            this.complete = true
        } else 
            this.complete = false
    }
    
};

