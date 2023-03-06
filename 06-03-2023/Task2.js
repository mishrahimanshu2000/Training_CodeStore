//An access modifier is a keyword that we can apply to a member of a class to control its access from the outside.
// The followings are the access modifiers in most of the object-oriented programs.
// public, private and protected.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// To use access modifiers we need to create TS file and then compile it to get JS file 
var Employee = /** @class */ (function () {
    // employeeName;
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    Object.defineProperty(Employee.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (s) {
            this._salary = s;
        },
        enumerable: false,
        configurable: true
    });
    // private function
    Employee.prototype.isManager = function () {
        return this._salary > 20000;
    };
    return Employee;
}());
var CodeStore_Employee = /** @class */ (function (_super) {
    __extends(CodeStore_Employee, _super);
    function CodeStore_Employee(name) {
        return _super.call(this, name) || this;
    }
    CodeStore_Employee.prototype.setSalary = function (s) {
        this._salary = s; // protected member is accessed by subClass;
    };
    return CodeStore_Employee;
}(Employee));
var prateek = new Employee("Prateek");
prateek.greet();
prateek.salary = 12000;
console.log(prateek.salary);
// prateek.isManager();
// this will throw an error : Property 'isManager' is private and only accessible within class 'Employee'.
console.log(prateek.employeeName);
// prateek._salary;
// this will also throw an errior: Property '_salary' is protected and only accessible within class 'Employee' and its subclasses.
var himanshu = new CodeStore_Employee("Himanshu");
console.log(himanshu.employeeName);
himanshu.greet();
// himanshu.isManager(); 
// will throw an error;
// himanshu._salary;
// this will also throw an errior: Property '_salary' is protected and only accessible within class 'Employee' and its subclasses.
himanshu.setSalary(15000);
console.log(himanshu._salary);
