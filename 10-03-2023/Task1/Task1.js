var Person = /** @class */ (function () {
    function Person(fName, lName, age) {
        if (fName === void 0) { fName = "firstName"; }
        if (lName === void 0) { lName = ""; }
        if (age === void 0) { age = 0; }
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
    }
    return Person;
}());
var persons = [];
var Himanshu = new Person("Himanshu", "Mishra", 21);
var pankaj = new Person("Pankaj", "Singh", 20);
var piyush = new Person("Piyush");
piyush.lastName = "Verma";
piyush.age = 22;
persons.push(Himanshu);
persons.push(pankaj);
persons.push(piyush);
persons.forEach(function (p) {
    console.log("First Name: " + p.firstName + "\nLast Name: " + p.lastName + "\nage: " + p.age);
});
