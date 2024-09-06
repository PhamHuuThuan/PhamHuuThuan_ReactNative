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

//29. Print the distance between the first 100 prime numbers
function distanceBetweenFirst100PrimeNumbers(){
    var result = [];
    var count = 0;
    var i = 2;
    var prev = i;
    while(count < 100){
        if(isPrime(i)){
            result.push(i - prev);
            prev = i;
            count++;
        }
        i++;
    }
    return result;
}
console.log("The distance between the first 100 prime numbers: " + distanceBetweenFirst100PrimeNumbers());

//30. Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
function addTwoPositiveNumbers(num1, num2){
    var result = "";
    var carry = 0;
    var i = num1.length - 1;
    var j = num2.length - 2;
    while(i >= 0 || j>= 0){
        var sum = carry;
        if(i >= 0){
            sum += parseInt(num1[i]);
            i--;
        }
        if(j >= 0){
            sum += parseInt(num2[j]);
            j--;
        }
        carry = Math.floor(sum/10);
        result = (sum % 10) + result;
    }
    if(carry > 0)
        result = carry + result;
    return result;
}
console.log("Add two positive numbers: ", addTwoPositiveNumbers("123456789", "987654321"));

//31. Create a function that will return the number of words in a text
function countWords(text){
    return text.split(" ").length;
}
console.log("Number of words in a text: ", countWords("My name is Pham Huu Thuan"));

//32. Create a function that will capitalize the first letter of each word in a text
function capitalizeFirstLetter(text){
    return text.split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
console.log("Capitalize the first letter of each word in a text: ", capitalizeFirstLetter("my name is pham huu thuan"));

//33. Calculate the sum of numbers received in a comma delimited string
function sumOfNumbersInString(str){
    return str.split(",").reduce((sum, num) => sum + parseFloat(num), 0);
}
console.log("Sum of numbers in a comma delimited string: ", sumOfNumbersInString("1,2,3,4,5"));

//34. Create a function that returns an array with words inside a text.
function wordsInText(text){
   return text.split(" ");
}
console.log("Words inside a text: ", wordsInText("My name is Pham Huu Thuan"));