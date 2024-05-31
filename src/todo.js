export default class ToDoList{
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
    
    changeTitle(newTitle) {
        this.title.textContent = newTitle;
    }
    
    changeDescription(newDescription) {
        this.description.textContent = newDescription;
    }
    
    changeDueDate(newDueDate) {
        this.dueDate.textContent = newDueDate;
    }
    
    changePriority(newPrio) {
        this.priority.textContent = newPrio;
    }
    
    updateNotes(newNotes) {
        this.notes.textContent = newNotes;
    }
    
};

