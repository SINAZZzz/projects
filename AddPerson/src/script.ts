// classes
import { Person } from "./classes/Person.js";
import { AddPerson } from "./interfaces/AddPerson.js";
import { FormElements } from "./interfaces/FormElements.js";

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

document.getElementById("submit")?.addEventListener("click", validateForm);