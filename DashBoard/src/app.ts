document.getElementById('sidebar-toggle')?.addEventListener('click', () => {
    const sidebar = document.querySelector<HTMLElement>('.sidebar');
    if (sidebar) {
        sidebar.classList.toggle('-translate-x-full');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.nav-link');
    const contents: NodeListOf<HTMLElement> = document.querySelectorAll('.content');

    // Hide all content except the default one
    // contents.forEach(function (content) {
    //     if (!content.classList.contains('block')) {
    //         content.style.display = 'none';
    //     }
    // });

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const target: string | null = this.getAttribute('data-target');

            contents.forEach(function (content) {
                content.style.display = 'none';
            });

            if (target) {
                const targetContent: HTMLElement | null = document.getElementById(target + '-content');
                if (targetContent) {
                    targetContent.style.display = 'block';
                }
            }
        });
    });
});

const Username = document.getElementById('username') as HTMLInputElement;
const Task = document.getElementById('task') as HTMLInputElement;
const addButton = document.getElementById('submit') as HTMLButtonElement;

const userValue: string = Username.value;
const taskValue: string = Task.value;

const Submit = () => {

    if (userValue === '' || taskValue === '') {
        alert("Error: Please fill in all fields");
    } else {
        alert(`${userValue} === ${taskValue}`)
    }
}

if(addButton){
        addButton.addEventListener('click', Submit);
}

const targetDiv: HTMLElement | null = document.getElementById('targetDiv');


const createElementOnClick = (usernameValue: string, taskValue: string): void =>{
    const newElement: HTMLDivElement = document.createElement('div');
    newElement.textContent = `username :  ${usernameValue} >>> task : ${taskValue} `;
    newElement.className = 'cardTask';
    targetDiv.appendChild(newElement);

    Username.value = '';
    Task.value = '';
}