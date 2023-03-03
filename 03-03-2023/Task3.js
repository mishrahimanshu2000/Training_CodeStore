// Arrays in Java Script
// Arrays are special variable which can hold more then one value

// Creating an Array

// Declaration and initialization in same line
let arr = ["Himanshu", "Vishnu", "Yash", "Mayank", "Shourya"];

//Declaration and initialize elements seprately
let arr2 = [];
arr2[0] = "Himanshu";
arr2[1] = "Vishnu";
arr2[2] = "Yash";
arr2[3] = "Mayank";
arr2[4] = "Shourya";

// arr2[8] = "test"
//we can also add any element at any index but it will create a hole in the array means the elements get the value *undefined*
//indexing of the elements start with 0

// using new Keyword
let arr3 = new Array("Himanshu", "Vishnu", "Yash", "Mayank", "Shourya");


// Accessing an Array element
// we can access the elemennts with the help of indexes like arr[index]
//example
console.log(arr3[0]);
console.log(arr3[1]);

//properties and methods of Array in JS
//length : returns the length of an array
console.log(arr.length);

//constructor: it returns the function that will create the array prototype
/*
    function Array(){[Native code]}
*/
console.log("==Concat==")
// methods
//concat: The concat() method concatenates (joins) two or more arrays.
//The concat() method returns a new array, containing the joined arrays.
//The concat() method does not change the existing arrays.
let testArr = ["Saurav", "Aakash"];
let arr1 = arr.concat(arr);
console.log(arr1);

console.log("==copyWithin==")
//copyWithin
//The copyWithin() method copies array elements to another position in the array.
// The copyWithin() method overwrites the existing values.
// The copyWithin() method does not add items to the array.
console.log(arr.copyWithin(1, 0));

console.log("==findIndex==")
//The findIndex() method executes a function for each array element.
// The findIndex() method returns the index (position) of the first element that passes a test.
// The findIndex() method returns -1 if no match is found.
function checkName(name) {
    return name == "Mayank"
}
console.log(arr.findIndex(checkName));

console.log("==forEach==")
//The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.
let nums = [20, 5, 62, 77, 22];
let total = 0;
nums.forEach(sum)
function sum(i) {
    total += i;
}
console.log(total);

console.log("==includes==")
//The includes() method returns true if an array contains a specified value.
// The includes() method returns false if the value is not found.
// The includes() method is case sensitive.
console.log(nums.includes(5));

console.log("==indexOf==")
//The indexOf() method returns the first index (position) of a specified value.
// The indexOf() method returns -1 if the value is not found.
// The indexOf() method starts at a specified index and searches from left to right.
console.log(arr.indexOf("Shourya"));

console.log("==lastIndexOf==")
//works same as indexOf but searches the element form right to left
console.log(arr.lastIndexOf("Himanshu"));       //0


console.log("==isArray==")
// The isArray() method returns true if an object is an array, otherwise false.
console.log(Array.isArray(nums));        // true

console.log("==map==")
// map() creates a new array from calling a function for every array element.
let nums2 = [4, 9, 16, 25]
console.log(nums2.map(Math.sqrt));      // [2,3,4,5]

console.log("==push==")
// The push() method adds new items to the end of an array.
// The push() method changes the length of the array.
// The push() method returns the new length.
console.log("before pushing length : " + nums2.length);
console.log("before pushing length : " + nums2.push(36));     //5

console.log("==Pop==");
// Pop() removes the last element from the array
//returns the removed element
console.log(nums2.pop());  // 36

console.log("==reverse==")
// The reverse() method reverses the order of the elements in an array.
// The reverse() method overwrites the original array.
console.log("Before reversing" + nums2);
nums2.reverse();
console.log("After reversing" + nums2)

console.log("==shift==");
// The shift() method removes the first item of an array.
// The shift() method changes the original array.
// The shift() method returns the shifted element.
console.log(arr.shift());

console.log("==unshift==")
// The unshift() method adds new elements to the beginning of an array.
// The unshift() method overwrites the original array.
console.log("before Unshifting" + arr);
arr.shift("Himanshu");
console.log("After shift " + arr);

console.log("==slice==");
// The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start, up to a (not inclusive) given end.
// The slice() method does not change the original array.
console.log(arr.slice(1, 4));

console.log("==some==")
// The some() method checks if any array elements pass a test (provided as a callback function).
// The some() method executes the callback function once for each array element.
// The some() method returns true (and stops) if the function returns true for one of the array elements.
// The some() method returns false if the function returns false for all of the array elements.
let nSome = [5, 8, 5, 12, 18, 65];
function checkAdult(age) {
    return age >= 18;
}
console.log(nSome.some(checkAdult));

console.log("==sort==");
// The sort() sorts the elements of an array.
// The sort() overwrites the original array.
// The sort() sorts the elements as strings in alphabetical and ascending order.
console.log("Before sorting" + arr)
arr.sort();
console.log("After Sorting: " + arr);
// For sorting thr integers we need to define compare as sort sorts the elements as a string
nums.sort(function (a, b) {
    return a - b;
});

console.log("==Splice==")
// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.
console.log("before splashing: " + arr);
console.log("returned element: " + arr.splice(1, 2, "Himanshu", "Piyush"));
console.log("after splashing: " + arr);

console.log("==toString==")
// The toString() method returns a string with array values separated by commas.
// The toString() method does not change the original array.
console.log(arr.toString());

console.log("==join==")
// The join() method returns an array as a string.
// The join() method does not change the original array.
// Any separator can be specified. The default is comma (,).
console.log(arr.join("~"));


// ------------------------------------------------------------------Array of Objects-----------------------------------------------------------
// To create an array of objects in javascript, we have to declare an empty array first and then initialize it with the objects separated by a comma.
// the following array have 4 elements with each element having 3 properties fName, lName, city
let myFriends = [
    {
        fName: "Yash",
        lName: "Raj",
        city: "Rudrapur"
    },
    {
        fName: "Pankaj",
        lName: "Singh",
        city: "Udaipur"
    },
    {
        fName: "Piyush",
        lName: "Verma",
        city: "Muzaffarpur"
    },
    {
        fName: "Abhishek",
        lName: "Maurya",
        city: "Varanasi"
    },
];
console.log(myFriends)

console.log(myFriends[1]);
console.log(myFriends[2]['fName']);
console.log(myFriends[0].lName);
console.log(myFriends[1].city);

let jsonObj = JSON.stringify(myFriends);
console.log(jsonObj)
let jsonAr = JSON.stringify(arr1);
console.log(jsonAr)