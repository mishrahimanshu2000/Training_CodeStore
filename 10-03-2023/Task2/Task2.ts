class Human{
    public name : string;
    public age : number;
    protected occupation : string; // can be accessed in the subclass
    private address : string; // can only be accessed within the class
    
    constructor(name:string, age:number, occupation : string, address:string){
        this.name = name;
        this.age = age;
        this.address = address;
        this.occupation = occupation;
    }
    public setAddress(ad : string){
        this.address = ad;
    }
    protected getAddress(){
        return this.address;
    }
}
class Student extends Human{
    public school : string;
    public standard : number;
    constructor(name:string, age:number, occupation : string, address:string, school : string, standard : number){
        super(name, age, occupation, address);
        this.school = school;
        this.standard = standard;
    }
    
    public showDetail(){
        console.log("Name: "+this.name + "\nAge :" + this.age + "\nAddress: " + 
        //this.address // Error private property
        this.getAddress() + "\nSchool: " + this.school + "\nStandard: " + this.standard + "\nOccupation: "+  this.occupation
        );
    } 
}
let s = new Student("Himanshu Mishra", 21, "Software Engineer", "Varanasi" , "St. Xavier's High School", 12);
// s.occupation;// this is procted and cannot be accessed Extrenally
s.showDetail();