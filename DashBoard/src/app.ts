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




interface AddPerson {
    fname: string;
    lname : string;
    age: number;
    email: string;
    telephone: number;
}

interface FormElements {
    fname: HTMLInputElement;
    lname: HTMLInputElement;
    age: HTMLInputElement;
    email: HTMLInputElement;
    telephone: HTMLInputElement;
}

interface HasFormatter { 
    show(): string ;
}

class Person implements  HasFormatter {
    constructor(
        public fname:string ,
        public lname:string ,
        public age:number ,
        private email: string ,
        readonly telephone:number){}

    show(){
        return `Welcome user : ${this.fname} ${this.lname} <br> your age : ${this.age} <br> email : ${this.email} 
        <br> telephone : ${this.telephone} <br> Good Person :))`;
    }
}

const validateForm = () => {
    const form = document.getElementById('myForm') as HTMLFormElement;
    const elements: FormElements = {
        fname: form.elements.namedItem('fname') as HTMLInputElement,
        lname : form.elements.namedItem('lname') as HTMLInputElement,
        age: form.elements.namedItem('age') as HTMLInputElement,
        email: form.elements.namedItem('email') as HTMLInputElement,
        telephone: form.elements.namedItem('telephone') as HTMLInputElement
    };

    const person: AddPerson = {
        fname: elements.fname.value.trim(),
        lname: elements.lname.value.trim(),
        age: parseInt(elements.age.value.trim(), 10),
        email: elements.email.value.trim(),
        telephone: parseInt(elements.telephone.value.trim(), 10),
    };


    if (person.fname === "" || person.lname === "" || isNaN(person.age) || person.email === "" || isNaN(person.telephone)) {
        alert("Invalid");
    } else {
        const newPerson = new Person(person.fname , person.lname , person.age , person.email , person.telephone);
       const newDiv: HTMLDivElement = document.createElement('div');
       newDiv.innerHTML = newPerson.show(); 
       newDiv.className = 'personDetails';

       const dashboardContent: HTMLElement | null = document.getElementById('dashboard-content');
       if (dashboardContent) {
           dashboardContent.appendChild(newDiv);
       }

       form.reset();  
    }
}

document.getElementById("add")?.addEventListener("click", validateForm);