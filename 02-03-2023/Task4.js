// Demonstrate the use of var, let and const keywords in JS using a simple example of each.

// All var, let, const all the three keywords are used to declare and create Variable in JavaScript

/* 
var:
    var has the global scope, even if we declare var inside a block then also we will be getting its value globally
*/
print();

function print(){
    var a= 20;
    console.log(a);
}
// console.log(a);


/*
let:
    value assigned using the  let keyword cannot be redeclared 

    but can be reassiged

    let is block scoped means variable declared using let keyword cant be used and accessed outside the block in which it is declared
*/
let b=10;                    
b= 189;

console.log(b);

{
let c=100;
}
// it  will give an error as life of c is inside the block only
c=10;                   
console.log(c);

/*
const
    Variables defined with const cannot be Redeclared.

    Variables defined with const cannot be Reassigned.

    Variables defined with const have Block Scope.
*/

const pi = 3.141592653589793;

//This will give an error
pi = 3.14; 
//This will give an error
pi += 10;