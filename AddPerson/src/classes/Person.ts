import { HasFormatter } from "../interfaces/HasFormatter";

export class Person implements  HasFormatter {
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