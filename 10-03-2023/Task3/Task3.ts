interface Detail {
    name : string,
    age : number, 
    city : string,
    contact_no : number;
    showDetail : ()=>string,
}
let abhishek : Detail = {
    name : 'Abhishek',
    age : 21,
    city : 'Varanasi',
    contact_no : 1478523690,
    showDetail: () : string=>{
        return (`Name: ${abhishek.name} \n Age: ${abhishek.age} \nCity: ${abhishek.city} \nContact no.: ${abhishek.contact_no}`);
    }
};
console.log("Interface");
console.log(abhishek);
console.log(abhishek.showDetail());

//Direction enum (constant values of direction)
enum direction {
    east,   //0
    west,   //1
    north,  //2
    south   //3
}


console.log("enum direction");
console.log(direction);
console.log(direction.east); //0

enum statusCode{
    NotFound = 404,
    OK = 200,
    Accepted = 202,
    BadRequest = 400,
}
console.log("enum : statusCode")
console.log(statusCode);
console.log(statusCode.OK); //200

