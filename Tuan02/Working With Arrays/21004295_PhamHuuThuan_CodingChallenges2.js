function calcAverageHumanAge(ages){
    const humanAge = ages.map(dogAge => dogAge <= 2 ? 2*dogAge : 16 + 2*dogAge);
    const adults = humanAge.filter(age => age >= 18);
    return adults.reduce((sum, age) => sum + age, 0)/adults.length;
}

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));