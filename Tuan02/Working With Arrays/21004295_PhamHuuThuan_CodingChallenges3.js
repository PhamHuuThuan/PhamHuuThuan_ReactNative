//Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
function calcAverageHumanAge(ages){
    return ages.map(dogAge => dogAge <= 2 ? 2*dogAge : 16 + 2*dogAge).filter(age => age >= 18).reduce((sum, age, i, arr) => sum + age/arr.length, 0);
}

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));