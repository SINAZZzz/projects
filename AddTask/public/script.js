"use strict";
var usernameInput, taskInput, newDiv, createElementOnClick, addButton;
usernameInput = document.getElementById('username');
taskInput = document.getElementById('task');
addButton = document.getElementById('submit');
createElementOnClick = function (usernameValue, taskValue) {
    newDiv = document.createElement('div');
    newDiv.textContent = "username :  ".concat(usernameValue, " >>> task : ").concat(taskValue, " ");
    newDiv.style.color = 'red';
    document.body.appendChild(newDiv);
    usernameInput.value = '';
    taskInput.value = '';
};
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
