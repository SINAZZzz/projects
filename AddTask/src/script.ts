
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


const usernameInput = document.getElementById('username') as HTMLInputElement;
const taskInput = document.getElementById('task') as HTMLInputElement;

function createElementOnClick(usernameValue: string, taskValue: string): void {
    const newDiv = document.createElement('div');
    newDiv.textContent = `username :  ${usernameValue} >>> task : ${taskValue} `;
    newDiv.style.color = 'red';
    document.body.appendChild(newDiv);

    // Clear input fields
    usernameInput.value = '';
    taskInput.value = '';
}

const addButton = document.getElementById('submit');

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

