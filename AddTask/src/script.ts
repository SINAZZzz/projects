
let usernameInput:HTMLInputElement , taskInput:HTMLInputElement , newDiv:HTMLDivElement , createElementOnClick:Function ,
 addButton:HTMLElement | null

usernameInput = document.getElementById('username') as HTMLInputElement;
taskInput = document.getElementById('task') as HTMLInputElement;
addButton = document.getElementById('submit');

createElementOnClick = (usernameValue: string, taskValue: string): void =>{
    newDiv = document.createElement('div');
    newDiv.textContent = `username :  ${usernameValue} >>> task : ${taskValue} `;
    newDiv.className = 'cardTask';
    document.body.appendChild(newDiv);

    usernameInput.value = '';
    taskInput.value = '';
}

if (addButton) {
    addButton.addEventListener('click', () => {
        const usernameValue: string = usernameInput.value;
        const taskValue: string = taskInput.value;

        if (usernameValue === '' || taskValue === '') {
            alert("Error: Please fill in all fields");
        } else {
            createElementOnClick(usernameValue, taskValue);
        }
    });
}

