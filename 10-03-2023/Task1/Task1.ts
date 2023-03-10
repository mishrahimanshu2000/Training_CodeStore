class Person{
    firstName : string;
    lastName : string;
    age : number;
    

    constructor(fName : string = "firstName", lName : string = "",age : number = 0 ){
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
    }
}
let persons : Person[] = [];
let Himanshu = new Person("Himanshu", "Mishra",21);
let pankaj = new Person("Pankaj", "Singh", 20);
let piyush = new Person("Piyush");
piyush.lastName = "Verma";
piyush.age = 22;

persons.push(Himanshu);
persons.push(pankaj);
persons.push(piyush);

persons.forEach(p => {
    console.log( "First Name: " + p.firstName +"\nLast Name: " + p.lastName + "\nage: " + p.age);
});