let arr : any = ["1", "a", "2", "b", "3", "c", "4", "d", "5", "e"];   // Given Array
let ans : Array<Number | string> = [];  // New Array

console.log("Given Array");
console.log(arr);
arr.forEach((element : string|number) => {
    console.log(element + " -> " + typeof element)
});

arr.forEach(element => {
    if(isNaN(parseInt(element)))
        ans.push(element.toUpperCase());
    else
        ans.push(parseInt(element));
});

console.log("Modifying\n")
for(let i=0; i<arr.length; i++){
    if(isNaN(parseInt(arr[i]))){
        arr[i] = arr[i].toUpperCase();
    }
    else{
        arr[i] = parseInt(arr[i]);
    }
}
console.log("After Modification");
console.log(arr);
arr.forEach((element : string|number) => {
    console.log(element + " -> " + typeof element)
});


console.log("New Array");
console.log(ans);
ans.forEach(element => {
    console.log(element + " -> " + typeof element)
});