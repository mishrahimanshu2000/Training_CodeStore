var arr = ["1", "a", "2", "b", "3", "c", "4", "d", "5", "e"]; // Given Array
var ans = []; // New Array
console.log("Given Array");
console.log(arr);
arr.forEach(function (element) {
    console.log(element + " -> " + typeof element);
});
arr.forEach(function (element) {
    if (isNaN(parseInt(element)))
        ans.push(element.toUpperCase());
    else
        ans.push(parseInt(element));
});
console.log("Modifying\n");
for (var i = 0; i < arr.length; i++) {
    if (isNaN(parseInt(arr[i]))) {
        arr[i] = arr[i].toUpperCase();
    }
    else {
        arr[i] = parseInt(arr[i]);
    }
}
console.log("After Modification");
console.log(arr); 
arr.forEach(function (element) {
    console.log(element + " -> " + typeof element);
});
console.log("New Array");
console.log(ans);
ans.forEach(function (element) {
    console.log(element + " -> " + typeof element);
});
