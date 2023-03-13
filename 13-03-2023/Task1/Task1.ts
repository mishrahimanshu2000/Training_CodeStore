// Inheritance in TS

// Single Inheritance
class Pet{
    name:string;
    animal:string;
    constructor(name : string, animal : string){
        this.name = name;
        this.animal  = animal;
    }
    display() : string{
        return `The name of ${this.animal} is ${this.name}`;
    }
}

class Dog extends Pet{
    constructor(name : string){
        super(name, "Dog");
    }
    bark(): void{
        console.log("Dog is Barking");
    }
}

let tyson = new Dog("Tyson");
console.log(tyson.display());
tyson.bark();

// Hierarchical Inheritance

class Cat extends Pet{
    constructor(name : string){
        super(name, "Cat");
    }
    meow(): void{
        console.log("Cat is Meowing");
        
    }
}

let milly = new Cat("Milly");
console.log(milly.display());
milly.meow();

// MultiLevel Inheritance

class Pitbull extends Dog{
    override display(): string {
        return `This is a ${this.animal}, It's breed is Pitbull and name is ${this.name}`;
    }
    override bark(): void {
        console.log("Barking Loudly");
    }
}

let pb = new Pitbull("Syrus")
console.log(pb.display());
pb.bark();