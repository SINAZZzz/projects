// Interfaces
interface FormElements {
    fname: HTMLInputElement;
    lname: HTMLInputElement;
    age: HTMLInputElement;
    email: HTMLInputElement;
    telephone: HTMLInputElement;
}

interface AddPerson {
    fname: string;
    lname : string;
    age: number;
    email: string;
    telephone: number;
}

// classes
class Person {
    constructor(
        public fname:string ,
        public lname:string ,
        public age:number ,
        private email: string ,
        readonly telephone:number){}

    show(){
        return `Welcome user >>> ${this.fname} ${this.lname} your age : ${this.age} and email : ${this.email} 
        and telephone : ${this.telephone} Good Person :))`;
    }
}
// Functions
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
        elements.fname.value = "";
        elements.lname.value = "";
        elements.age.value = "";
        elements.email.value = "";
        elements.telephone.value = "";
        alert(newPerson.show())        
    }
}
