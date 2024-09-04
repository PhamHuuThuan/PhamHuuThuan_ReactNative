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

//14. Create a function that will return a Boolean specifying if a number is prime
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

//15. Calculate the sum of digits of a positive integer number
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