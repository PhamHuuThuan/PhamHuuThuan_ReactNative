//Map
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt);
console.log(newArr); // [ 2, 3, 4, 5 ]

const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];

function getFullName(item){
    return [item.firstname, item.lastname].join(" ");
}
console.log(persons.map(getFullName));

//Filter
const ages = [32, 33, 16, 40];

function checkAdult(age){
    return age >= 18;
}

const result = ages.filter(checkAdult);
console.log(result);

//Find
ages1 = [3, 10, 19, 20];

function checkAge(age){
    return age > 18;
}
console.log(ages1.find(checkAge))

//Reduce
const numbers2 = [175, 50, 25];
function myFunc(total, num){
    return total - num;
}
console.log(numbers2.reduce(myFunc))

const numbers3 = [15.5, 2.3, 1.1, 4.7];
function getSum(total, num){
    return total + Math.round(num);
}
console.log(numbers3.reduce(getSum));

//Some
const ages2 = [3, 10, 18, 20];

function checkAdult(age){
    return age > 18;
}
console.log(ages.some(checkAdult));