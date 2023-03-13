"use strict";
// Abstraction in TS
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
// exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var MannualCar = /** @class */ (function (_super) {
    __extends(MannualCar, _super);
    function MannualCar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "Mannual";
        return _this;
    }
    MannualCar.prototype.turnOnCar = function () {
        console.log("Turning on the Car.");
    };
    MannualCar.prototype.turnOffCar = function () {
        console.log("Turning off the Car.");
    };
    MannualCar.prototype.carType = function () {
        return this.type;
    };
    return MannualCar;
}(Car));
// let car = new Car(); // The instance of abstract class cannot be created it just provides the blueprint to the derived class.
console.log("Example of Abstraction Here Mannual car extends Car class which is Abstract class");
var mCar = new MannualCar();
mCar.turnOnCar();
mCar.turnOffCar();
console.log(mCar.carType());
// Polymorphism 
var MyCar = /** @class */ (function (_super) {
    __extends(MyCar, _super);
    function MyCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyCar.prototype.turnOffCar = function () {
        console.log("Turning off the Car by Remote");
    };
    MyCar.prototype.turnOnCar = function () {
        console.log("Turning on the Car by Remote");
    };
    MyCar.prototype.display = function () {
        console.log("It is a mannual car with remote key");
    };
    return MyCar;
}(MannualCar));
console.log("Example of Polymorphism (Runtime)");
var carWithRemote = new MyCar();
carWithRemote.turnOnCar();
carWithRemote.turnOffCar();
carWithRemote.display();
// encapsulation
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    Student.prototype.getCity = function () {
        return this.city;
    };
    Student.prototype.setCity = function (city) {
        this.city = city;
    };
    Student.prototype.getRollNo = function () {
        return this.rollNo;
    };
    Student.prototype.setRollNo = function (rollNo) {
        this.rollNo = rollNo;
    };
    Student.prototype.displayInfo = function () {
        console.log("The details of the Student is \n Name : ".concat(this.name, " \n City : ").concat(this.city, " \nRollNo : ").concat(this.rollNo));
    };
    return Student;
}());
console.log("Example of Encapsulation");
var yash = new Student();
// yash.name = "Yash" // cannot be accessed because it is private
// using setter to set and get the properties;
yash.setName("Yash");
yash.setCity("RudraPur");
yash.setRollNo(123456);
console.log(yash.getName());
console.log(yash.getCity());
console.log(yash.getRollNo());
yash.displayInfo();
