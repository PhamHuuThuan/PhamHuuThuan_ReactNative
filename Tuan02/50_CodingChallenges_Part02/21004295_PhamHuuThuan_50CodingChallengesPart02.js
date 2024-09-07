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

//35. Create a function to convert a CSV text to a “bi-dimensional” array
function CSVToArray(str){
    return str.split("\n")
        .map(row => row.split(","));
}
console.log("Convert a CSV text to a bi-dimensional array: ", CSVToArray("a,b,c\nd,e,f\ng,h,i"));

//36. Create a function that converts a string to an array of characters
function stringToArray(str){
    return str.split("");
}
console.log("Convert a string to an array of characters: ", stringToArray("Pham Huu Thuan"));

//37. Create a function that will convert a string in an array containing the ASCII codes of each character
function stringToArrayASCII(str){
    return str.split("")
        .map(char => char.charCodeAt(0));
}
console.log("Convert a string in an array containing the ASCII codes of each character: ", stringToArrayASCII("Pham Huu Thuan"));

//38. Create a function that will convert an array containing ASCII codes in a string
function arrayASCIIToString(arr){
    return arr.map(num => String.fromCharCode(num)).join("");
}
console.log("Convert an array containing ASCII codes in a string: ", arrayASCIIToString([80, 104, 97, 109, 32, 72, 117, 117, 32, 84, 104, 117, 97, 110]));

//39. Implement the Caesar cypher
function caesarCypher(str, shift){
    return str.split("")
    .map(char =>{
        var code = char.charCodeAt(0);
        if(code >= 65 && code <= 90)
            code = 65 + (code - 65 + shift) % 26;
        if(code >= 97 && code <= 122)
            code = 97 + (code - 97 + shift) % 26;
        return String.fromCharCode(code);
    })
    .join("");
}
console.log("Caesar cypher: ", caesarCypher("Pham Huu Thuan", 3));

//40. Implement the bubble sort algorithm for an array of numbers
function bubbleSort(arr){
    for(var i = 0; i < arr.length - 1; i++){
        for(var j = 0; j < arr.length - i - 1; i++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
console.log("Bubble sort algorithm: ", bubbleSort([3, 2, 1, 5, 4]));

//41. Create a function to calculate the distance between two points defined by their x, y coordinates
function distanceBetweenTwoPoints(x1, y1, x2, y2){
    return Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
}
console.log("Distance between two points: ", distanceBetweenTwoPoints(1, 2, 3, 4));

//42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
//create object circle
function Circle(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
}
function areCirclesIntersecting(circle1, circle2){
    return distanceBetweenTwoPoints(circle1.x, circle1.y, circle2.x, circle2.y) < circle1.r + circle2.r;
}
console.log("Are two circles intersecting: ", areCirclesIntersecting(new Circle(1, 2, 3), new Circle(4, 5, 6)));

//43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
function extractColumn(arr, col){
    return arr.map(row => row[col]);
}
console.log("Extract a column from a bi-dimensional array: ", extractColumn([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1));

//44. Create a function that will convert a string containing a binary number into a number
function binaryToNumber(str){
    return parseInt(str, 2);
}
console.log("Convert a string containing a binary number into a number: ", binaryToNumber("1010"));

//45. Create a function to calculate the sum of all the numbers in a jagged array (contains numbers or other arrays of numbers on an unlimited number of levels)
function sumOfJaggedArray(arr){
    return arr.flat(Infinity).reduce((sum, num) => sum + num, 0);
}
console.log("Sum of all the numbers in a jagged array: ", sumOfJaggedArray([1, [2, [3, 4], 5], 6]));