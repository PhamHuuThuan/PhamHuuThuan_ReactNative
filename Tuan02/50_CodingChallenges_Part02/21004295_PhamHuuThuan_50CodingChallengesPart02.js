// 27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
function distinctArray(arr){
    return [...new Set(arr)];
}
console.log("Distinct Array: ", distinctArray([1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 9, 9, 10]));