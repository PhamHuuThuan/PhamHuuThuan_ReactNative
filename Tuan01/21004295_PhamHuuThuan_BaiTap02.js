//Coding chanllenge #1 BMI
function calBMI(mass, height){
    return mass/(height*height);
}

//Store Mark's and John's mass and height in variables
var massMark = 78;
var heightMark = 1.69;
var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = calBMI(massMark, heightMark);
var BMIJohn = calBMI(massJohn, heightJohn);

//Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
var markHigherBMI = false;
markHigherBMI = BMIMark > BMIJohn;

//1. Print a nice output to the console, saying who has the higher BMI. The message 
//is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
if(markHigherBMI){
    console.log("Mark's BMI is higher than John's!");
}else{
    console.log("John's BMI is higher than Mark's!");
}

// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
if(markHigherBMI){
    console.log("Mark's BMI ("+ BMIMark +") is higher than John's("+ BMIJohn +")!");
}else{
    console.log("John's BMI ("+ BMIJohn +") is higher than Mark's("+ BMIMark +")!");
}