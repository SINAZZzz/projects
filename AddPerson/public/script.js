var _a;
// classes
import { Person } from "./classes/Person.js";
// Functions
const validateForm = () => {
    const form = document.getElementById('myForm');
    const elements = {
        fname: form.elements.namedItem('fname'),
        lname: form.elements.namedItem('lname'),
        age: form.elements.namedItem('age'),
        email: form.elements.namedItem('email'),
        telephone: form.elements.namedItem('telephone')
    };
    const person = {
        fname: elements.fname.value.trim(),
        lname: elements.lname.value.trim(),
        age: parseInt(elements.age.value.trim(), 10),
        email: elements.email.value.trim(),
        telephone: parseInt(elements.telephone.value.trim(), 10),
    };
    if (person.fname === "" || person.lname === "" || isNaN(person.age) || person.email === "" || isNaN(person.telephone)) {
        alert("Invalid");
    }
    else {
        const newPerson = new Person(person.fname, person.lname, person.age, person.email, person.telephone);
        elements.fname.value = "";
        elements.lname.value = "";
        elements.age.value = "";
        elements.email.value = "";
        elements.telephone.value = "";
        alert(newPerson.show());
    }
};
(_a = document.getElementById("submit")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", validateForm);
