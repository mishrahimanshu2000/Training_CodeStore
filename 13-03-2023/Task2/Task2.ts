// Abstraction in TS

abstract class Car {
    abstract turnOnCar(): void;
    abstract turnOffCar(): void;
    abstract carType(): string;
}
class MannualCar extends Car {
    private type = "Mannual";
    turnOnCar(): void {
        console.log("Turning on the Car.");
    }
    turnOffCar(): void {
        console.log("Turning off the Car.");
    }
    carType(): string {
        return this.type;
    }
}
// let car = new Car(); // The instance of abstract class cannot be created it just provides the blueprint to the derived class.
console.log("Example of Abstraction Here Mannual car extends Car class which is Abstract class")
let mCar = new MannualCar();
mCar.turnOnCar();
mCar.turnOffCar();
console.log(mCar.carType());


// Polymorphism 
class MyCar extends MannualCar {
    override turnOffCar(): void {
        console.log("Turning off the Car by Remote");
    }
    override turnOnCar(): void {
        console.log("Turning on the Car by Remote");
    }
    display(): void {
        console.log("It is a mannual car with remote key");
    }
}

console.log("Example of Polymorphism (Runtime)");
let carWithRemote = new MyCar();
carWithRemote.turnOnCar();
carWithRemote.turnOffCar();
carWithRemote.display();

// encapsulation

class Student {
    private name: string;
    private city: string;
    private rollNo: number;

    public getName(): string {
        return this.name;
    }
    public setName(name: string) {
        this.name = name;
    }
    public getCity(): string {
        return this.city;
    }
    public setCity(city: string) {
        this.city = city;
    }
    public getRollNo(): number {
        return this.rollNo;
    }
    public setRollNo(rollNo: number) {
        this.rollNo = rollNo;
    }

    public displayInfo(): void {
        console.log(`The details of the Student is \n Name : ${this.name} \n City : ${this.city} \nRollNo : ${this.rollNo}`);
    }
}

console.log("Example of Encapsulation");
let yash = new Student();
// yash.name = "Yash" // cannot be accessed because it is private
// using setter to set and get the properties;
yash.setName("Yash");
yash.setCity("RudraPur");
yash.setRollNo(123456);
console.log(yash.getName());
console.log(yash.getCity());
console.log(yash.getRollNo());
yash.displayInfo();



export {}