//An access modifier is a keyword that we can apply to a member of a class to control its access from the outside.
// The followings are the access modifiers in most of the object-oriented programs.
// public, private and protected.

// To use access modifiers we need to create TS file and then compile it to get JS file 


class Employee {
    employeeName: string

    // protected member
    protected _salary : number;
    // employeeName;
    constructor(name: string) {
        this.employeeName = name
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`)
    }
    
    public getSalary() : number {
        return this._salary;
    }
    public  setSalary(s : number){
        this._salary = s;
    }
    // private function
    private isManager() {
        return this._salary > 20000;
    }
}
class CodeStore_Employee extends Employee{
    constructor(name : string){
        super(name);
    }
    public setSalary(s : number){
        this._salary = s;  // protected member is accessed by subClass;
    }
}

let prateek = new Employee("Prateek");

prateek.greet();
prateek.setSalary(12000);
console.log(prateek.getSalary())
// prateek.isManager();
    // this will throw an error : Property 'isManager' is private and only accessible within class 'Employee'.
console.log(prateek.employeeName);
// prateek._salary;
    // this will also throw an errior: Property '_salary' is protected and only accessible within class 'Employee' and its subclasses.

let himanshu = new CodeStore_Employee("Himanshu");
console.log(himanshu.employeeName);
himanshu.greet();
// himanshu.isManager(); 
    // will throw an error;

// himanshu._salary;
    // this will also throw an errior: Property '_salary' is protected and only accessible within class 'Employee' and its subclasses.

himanshu.setSalary(15000);
console.log(himanshu.getSalary());

export{}