var abhishek = {
    name: 'Abhishek',
    age: 21,
    city: 'Varanasi',
    contact_no: 1478523690,
    showDetail: function () {
        return ("Name: ".concat(abhishek.name, " \n Age: ").concat(abhishek.age, " \nCity: ").concat(abhishek.city, " \nContact no.: ").concat(abhishek.contact_no));
    }
};
console.log("Interface");
console.log(abhishek);
console.log(abhishek.showDetail());
//Direction enum (constant values of direction)
var direction;
(function (direction) {
    direction[direction["east"] = 0] = "east";
    direction[direction["west"] = 1] = "west";
    direction[direction["north"] = 2] = "north";
    direction[direction["south"] = 3] = "south"; //3
})(direction || (direction = {}));
console.log("enum direction");
console.log(direction);
console.log(direction.east); //0
var statusCode;
(function (statusCode) {
    statusCode[statusCode["NotFound"] = 404] = "NotFound";
    statusCode[statusCode["OK"] = 200] = "OK";
    statusCode[statusCode["Accepted"] = 202] = "Accepted";
    statusCode[statusCode["BadRequest"] = 400] = "BadRequest";
})(statusCode || (statusCode = {}));
console.log("enum : statusCode");
console.log(statusCode);
console.log(statusCode.OK); //200
