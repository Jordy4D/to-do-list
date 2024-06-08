console.log('test To Do');


export class Task {
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

// function deleteTask() {
//     const deleteBtn = document.querySelectorAll('.deleteBtn')
//     const task = document.querySelectorAll('.task')

    

//     // deleteBtn.addEventListener('click', function () {
//     //     const index = document.querySelector('.task').dataset.index   
//     //     console.log(index)

//     // })

//     deleteBtn.forEach(element => {
//         element.onclick = () => {
//             task
//             element.parentElement.remove();
//             project.tasks.splice(index, 1)
//             // project.slice(index.value, 1);
//         }
//     });
// }