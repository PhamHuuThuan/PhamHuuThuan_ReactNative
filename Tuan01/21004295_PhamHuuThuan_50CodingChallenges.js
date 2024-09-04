//1. Print numbers 1 to 10
for(var i = 1; i<=10; i++){
    console.log(i)
}

//2. Print the odd numbers less than 100
for(var i = 1; i < 100; i+=2){
    console.log(i)
}
//3. Print the multiplication table with 7
for(var i = 1; i <= 10 ; i++){
    console.log("7 x " + i + " = " + 7*i)
}

//4. Print all the multiplication tables with numbers from 1 to 10
for(var i = 1; i <= 10 ; i++){
    console.log("Bang cuu chuong " + i)
    for( var j = 1; j <= 10; j++){
        console.log(i + " x " + j + " = " + i*j)
    }
}

//5. Calculate the sum of numbers from 1 to 10
var i = 0, sum = 0;
while(i<=10){
    sum += i;
    i++;
}
console.log("the sum of numbers from 1 to 10 is" + sum)

//6. Calculate 10!
var giaithua = 1;
for(var i = 1; i <= 10; i++){
    giaithua *= i;
}
console.log("10! = " + giaithua)

//7. Calculate the sum of odd numbers greater than 10 and less than 30
var sum = 0;
for(var i = 11; i < 30; i+=2){
    sum += i;
}
console.log("the sum of odd numbers greater than 10 and less than 30 is " + sum)

//8. Create a function that will convert from Celsius to Fahrenheit
function convertCtoF(c){
    return c*1.8+32;
}
console.log("30 C = "  + convertCtoF(30) +" F")

//9. Create a function that will convert from Fahrenheit to Celsius
function convertFtoC(f){
    return (f-32)/1.8;
}
console.log("86 F = "  + convertFtoC(86) +" C")

//10. Calculate the sum of numbers in an array of numbers
nums = [1,2,3,4,5,6,7,8,9,10];
var sum = 0;
for( var i = 0; i < nums.length; i++){
    sum += nums[i];
}
console.log("the sum of numbers in an array of numbers is " + sum)

//11. Calculate the average of numbers in an array of numbers
nums = [1,2,3,4,5,6,7,8,9,10];
var sum = 0;
for( var i = 0; i < nums.length; i++){
    sum += nums[i];
}
var average = sum/nums.length;
console.log("the average of numbers in an array of numbers is " + average)

//12 Create a function that receives an array of numbers and retrurn an array containing only the positive numbers
function getPositiveNumbers(nums){
    var positiveNumbers = [];
    for(var i = 0; i < nums.length; i++){
        if(nums[i] > 0){
            positiveNumbers.push(nums[i]);
        }
    }
    return positiveNumbers;
}
console.log(getPositiveNumbers([1,2,-1,-2,3,-3]))

//13. Find the maximum number in an array of numbers
function maximunNumber(nums){
    var max = nums[0];
    for(i = 1; i < nums.length; i++){
        if(nums[i] > max)
            max = nums[i];
    }
    return max;
}
console.log(maximunNumber([1,2,3,4,5,6,7,8,9,10]))

//14. Print the first 10 Fibonacci numbers without recursion 
var a = 0, b = 1, c;
console.log(a);
console.log(b);
for(var i = 3; i <= 10; i++){
    c = a + b;
    console.log(c);
    a = b;
    b = c;
}

//15. Create a function that will find the nth Fibonacci number using recursion
function fibonacci(n){
    if(n<=1)
        return n;
    return fibonacci(n-1) + fibonacci(n-2);
}
console.log("the 10th Fibonacci number is " + fibonacci(10));

//16. Create a function that will return a Boolean specifying if a number is prime
function isPrime(n){
    if(n < 2){
        return false;
    }
    for(var i = 2; i <= Math.sqrt(n); i++){
        if(n%i === 0)
            return false;
    }
    return true;
}
console.log(isPrime(7))

//17. Calculate the sum of digits of a positive integer number
function sumOfDigits(n){
    var sum = 0;
    while(n > 10){
        sum += n%10;
        n = Math.floor(n/10);
    }
    sum += n;
    return sum;
}
console.log(sumOfDigits(12345))

//18. Print the first 100 prime numbers
var count = 0;
var n = 2;
while(count < 100){
    if(isPrime(n)){
        console.log(n);
        count++;
    }
    n++;
}

//19. Create a function that will return in an array the first “p” prime numbers greater than “n” 
function firstPrimeNumbersGreaterThanN(p, n){
    var primeNumbers = [];
    var count = 0;
    while(count < p){
        if(isPrime(n)){
            primeNumbers.push(n);
            count++;
        }
        n++;
    }
    return primeNumbers;
}
console.log("the first 5 prime numbers greater than 10 are " + firstPrimeNumbersGreaterThanN(5, 10))

//20. Rotate an array to the left 1 position
function rotateLeft(nums){
    var temp = nums[0];
    for(var i = 1; i < nums.length; i++){
        nums[i-1] = nums[i];
    }
    nums[nums.length-1] = temp;
    return nums;
}
console.log(rotateLeft([1,2,3,4,5]))

//21. Rotate an array to the right 1 position
function rotateRight(nums){
    var temp = nums[nums.length-1];
    for(var i = nums.length-1; i >= 0; i--){
        nums[i] = nums[i-1];
    }
    nums[0] = temp;
    return nums;
}
console.log(rotateRight([1,2,3,4,5]))

//22. Reverse an array
function reverseArray(nums){
    var reverseArray = [];
    for(var i = nums.length-1; i >= 0; i--){
        reverseArray.push(nums[i]);
    }
    return reverseArray;
}
console.log(reverseArray([1,2,3,4,5]))

//23. Reverse a string
function reverseString(str){
    var reverseString = "";
    for(var i = str.length-1; i >= 0; i--){
        reverseString += str[i]
    }
    return reverseString;
}
console.log(reverseString("hello") + " " + reverseString("world") + "!")

//24. Create a function that will merge two arrays and return the result as a new array
function mergeArrays(nums1, nums2){
    var mergeArray = nums1.concat(nums2);
    return mergeArray;
}
console.log(mergeArrays([1,2,3],[4,5,6]))

//25. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both 
function mergeArrays(nums1, nums2){
    var mergeArray = nums1.concat(nums2);
    var uniqueArray = mergeArray.filter((item, index) => mergeArray.indexOf(item) === index);
    return uniqueArray;
}
console.log("the numbers that are either in the first array or second array but not in both are " + mergeArrays([1,2,3],[2,3,4]))

//26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second
function uniqueElements(nums1, nums2){
    var uniqueElements = nums1.filter(item => !nums2.includes(item));
    return uniqueElements;
}
console.log("the elements that are in the first array but not in the second are " + uniqueElements([1,2,3],[2,3,4]))