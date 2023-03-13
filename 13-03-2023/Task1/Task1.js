// Inheritance in TS
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
// Single Inheritance
var Pet = /** @class */ (function () {
    function Pet(name, animal) {
        this.name = name;
        this.animal = animal;
    }
    Pet.prototype.display = function () {
        return "The name of ".concat(this.animal, " is ").concat(this.name);
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name, "Dog") || this;
    }
    Dog.prototype.bark = function () {
        console.log("Dog is Barking");
    };
    return Dog;
}(Pet));
var tyson = new Dog("Tyson");
console.log(tyson.display());
tyson.bark();
// Hierarchical Inheritance
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name, "Cat") || this;
    }
    Cat.prototype.meow = function () {
        console.log("Cat is Meowing");
    };
    return Cat;
}(Pet));
var milly = new Cat("Milly");
console.log(milly.display());
milly.meow();
// MultiLevel Inheritance
var Pitbull = /** @class */ (function (_super) {
    __extends(Pitbull, _super);
    function Pitbull() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pitbull.prototype.display = function () {
        return "This is a ".concat(this.animal, ", It's breed is Pitbull and name is ").concat(this.name);
    };
    Pitbull.prototype.bark = function () {
        console.log("Barking Loudly");
    };
    return Pitbull;
}(Dog));
var pb = new Pitbull("Syrus");
console.log(pb.display());
pb.bark();
