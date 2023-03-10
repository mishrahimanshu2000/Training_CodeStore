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
var Human = /** @class */ (function () {
    function Human(name, age, occupation, address) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.occupation = occupation;
    }
    Human.prototype.setAddress = function (ad) {
        this.address = ad;
    };
    Human.prototype.getAddress = function () {
        return this.address;
    };
    return Human;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, occupation, address, school, standard) {
        var _this = _super.call(this, name, age, occupation, address) || this;
        _this.school = school;
        _this.standard = standard;
        return _this;
    }
    Student.prototype.showDetail = function () {
        console.log("Name: " + this.name + "\nAge :" + this.age + "\nAddress: " +
            //this.address // Error private property
            this.getAddress() + "\nSchool: " + this.school + "\nStandard: " + this.standard + "\nOccupation: " + this.occupation);
    };
    return Student;
}(Human));
var s = new Student("Himanshu Mishra", 21, "Software Engineer", "Varanasi", "St. Xavier's High School", 12);
// s.occupation;// this is procted and cannot be accessed Extrenally
s.showDetail();
