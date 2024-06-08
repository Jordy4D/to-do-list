

export function deleteTask() {
    const deleteBtn = document.querySelectorAll('.deleteBtn')
    const task = document.querySelectorAll('.task')

    

    // deleteBtn.addEventListener('click', function () {
    //     const index = document.querySelector('.task').dataset.index   
    //     console.log(index)

    // })

    deleteBtn.forEach(element => {
        element.onclick = () => {
            task
            element.parentElement.remove();
            project.tasks.splice(index, 1)
            // project.slice(index.value, 1);
        }
    });
}