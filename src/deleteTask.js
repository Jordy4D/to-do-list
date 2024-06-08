

export function deleteTask() {
    const deleteBtn = document.querySelectorAll('.deleteBtn')

    

    deleteBtn.forEach(element => {
        element.onclick = () => {
            element.parentElement.remove();
        }
    });
}