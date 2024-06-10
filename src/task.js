console.log('test To Do');


class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = 0
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

function deleteTask(num) {
    const deleteBtn = document.querySelector('.deleteBtn')
    deleteBtn.parentElement.remove();
    tasks.splice(num, 1)

}

export { Task, deleteTask }