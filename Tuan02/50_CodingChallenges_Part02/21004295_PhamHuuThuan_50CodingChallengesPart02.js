// 27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
function distinctArray(arr){
    return [...new Set(arr)];
}
console.log("Distinct Array: ", distinctArray([1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 9, 9, 10]));

//28. Calculate the sum of first 100 prime numbers and return them in an array
function isPrime(num){
    if(num < 2)
        return false;
    for(var i = 2; i <= Math.sqrt(num); i++){
        if(num%i === 0)
            return false;
    }
    return true;
}
function sumOfFirst100PrimeNumbers(){
    var sum = 0;
    var count = 0;
    var i = 2;
    var result = [];
    while(count < 100){
        if(isPrime(i)){
            sum += i;
            result.push(i);
            count++;
        }
        i++;
    }
    return [sum, result];
}
console.log("Sum of first 100 prime numbers: " + sumOfFirst100PrimeNumbers() + "--- List of first 100 prime numbers: " + sumOfFirst100PrimeNumbers()[1]);