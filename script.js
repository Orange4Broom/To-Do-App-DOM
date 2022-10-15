const taskName = document.querySelector('#taskName');
const addButton = document.querySelector('#addTask');
const container = document.querySelector('#container');


addButton.onclick = function() {

    if (taskName.value.trim().length < 1) {
        alert('Give your task some name')
    }
    else {

    //create div "box" in "container"
    const box = document.createElement('div');
    box.classList.add('box');
    container.append(box);

    //create h2 "header" in "box"
    const header = document.createElement('h2');
    header.setAttribute('id', 'header');
    header.innerHTML = taskName.value;
    box.append(header);



    //create button "check"
    const checkButton = document.createElement('button');
    checkButton.classList.add('check');
    box.append(checkButton);

    //create i/icon for "check"
    const checkIcon = document.createElement('i');
    checkIcon.classList.add('fa-solid', 'fa-check');
    checkButton.append(checkIcon);

    const currentCheck = document.querySelectorAll('.check');

            
    for (let k = 0; k < currentCheck.length; k++) {
        currentCheck[k].onclick = function() {
            
            this.parentElement.style.backgroundColor = '#24B670';
            this.previousElementSibling.style.textDecoration = 'line-through';

            this.style.backgroundColor = '#FFFFFF';
            this.firstElementChild.style.color = '#24B670';

            this.firstElementChild.classList.remove('fa-solid', 'fa-check');
            this.firstElementChild.classList.add('fa-solid', 'fa-xmark')

            this.firstElementChild.style.fontSize = '24px';

            this.nextElementSibling.style.backgroundColor = '#FFFFFF';
            this.nextElementSibling.firstChild.style.color = '#24B670';
        }
    };

    //create button "delete" in box
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    box.append(deleteButton);

    //create i/icon for "delete"
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('far', 'fa-trash-alt');
    deleteButton.append(deleteIcon);



    //delete "box" function
    const currentTask = document.querySelectorAll('.delete', '.deleted');
    for (let i = 0; i < currentTask.length; i++) {
        currentTask[i].onclick = function() {
            this.parentElement.remove();
        }
    };
}
    
};