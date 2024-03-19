document.getElementById('sidebar-toggle')?.addEventListener('click', () => {
    const sidebar = document.querySelector<HTMLElement>('.sidebar');
    if (sidebar) {
        sidebar.classList.toggle('-translate-x-full');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.nav-link');
    const contents: NodeListOf<HTMLElement> = document.querySelectorAll('.content');

    contents.forEach(function (content) {
        if (!content.classList.contains('dashboard')) {
            content.style.display = 'none';
        }
    });

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

    const dashboardContent: HTMLElement | null = document.getElementById('dashboard-content');
    if (dashboardContent) {
        dashboardContent.style.display = 'block';
    }
});

const usernameInput: HTMLInputElement = document.getElementById('username') as HTMLInputElement;
const taskInput: HTMLInputElement = document.getElementById('task') as HTMLInputElement;
const addButton: HTMLElement | null = document.getElementById('submit');

const createElementOnClick = (usernameValue: string, taskValue: string): void => {
    const newDiv: HTMLDivElement = document.createElement('div');
    newDiv.innerHTML = `Username: ${usernameValue}<br>Task: ${taskValue}`;
    newDiv.className = 'cardTask';
    document.getElementById('dashboard-content')?.appendChild(newDiv);

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
