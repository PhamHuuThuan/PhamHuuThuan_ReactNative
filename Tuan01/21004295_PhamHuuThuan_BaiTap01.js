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

//3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
var markHigherBMI = false;
markHigherBMI = BMIMark > BMIJohn;

//Print result
console.log("Is Mark's BMI higher than John's? " + markHigherBMI);
