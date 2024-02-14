export class Person {
    constructor(fname, lname, age, email, telephone) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.email = email;
        this.telephone = telephone;
    }
    show() {
        return `Welcome user >>> ${this.fname} ${this.lname} your age : ${this.age} and email : ${this.email} 
        and telephone : ${this.telephone} Good Person :))`;
    }
}
