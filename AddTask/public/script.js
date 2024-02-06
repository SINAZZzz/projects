"use strict";
//     const username = document.getElementById('username') as HTMLInputElement;
//     const task = document.getElementById('task') as HTMLInputElement;
//     const usernameValue: string = username.value;
//     const taskValue: string = task.value;
// function createElementOnClick(): void {
//     const newDiv = document.createElement('div');
//     newDiv.textContent = 'This is a new div';
//     newDiv.style.color = 'red';
//     document.body.appendChild(newDiv);
// }
// const addButton = document.getElementById('submit');
// if(addButton){
//     addButton.addEventListener('click', () => {
//         if(usernameValue === '' || taskValue === ''){
//             alert("Error");
//         }else if () {
//             createElementOnClick()
//         }
//     })
// }
// function createElementOnClick(usernameValue: string, taskValue: string): void {
//     const newDiv = document.createElement('div');
//     newDiv.textContent = `username :  ${usernameValue} >>> task : ${taskValue} `;
//     newDiv.style.color = 'red';
//     document.body.appendChild(newDiv);
// }
// const addButton = document.getElementById('submit');
// if (addButton) {
//     addButton.addEventListener('click', () => {
//         const username = document.getElementById('username') as HTMLInputElement;
//         const task = document.getElementById('task') as HTMLInputElement;
//         const usernameValue: string = username.value;
//         const taskValue: string = task.value;
//         if (usernameValue === '' || taskValue === '') {
//             alert("Error: Please fill in all fields");
//         } else {
//             createElementOnClick(usernameValue, taskValue);
//         }
//     });
// }
var usernameInput = document.getElementById('username');
var taskInput = document.getElementById('task');
function createElementOnClick(usernameValue, taskValue) {
    var newDiv = document.createElement('div');
    newDiv.textContent = "username :  ".concat(usernameValue, " >>> task : ").concat(taskValue, " ");
    newDiv.style.color = 'red';
    document.body.appendChild(newDiv);
    // Clear input fields
    usernameInput.value = '';
    taskInput.value = '';
}
var addButton = document.getElementById('submit');
if (addButton) {
    addButton.addEventListener('click', function () {
        var usernameValue = usernameInput.value;
        var taskValue = taskInput.value;
        if (usernameValue === '' || taskValue === '') {
            alert("Error: Please fill in all fields");
        }
        else {
            createElementOnClick(usernameValue, taskValue);
        }
    });
}
