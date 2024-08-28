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