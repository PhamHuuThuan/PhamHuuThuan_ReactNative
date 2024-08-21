//Calculate the average score for each team
function avgScore(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

var teamDolphins = [96, 108, 89];
var teamKoalas = [88, 91, 110];

var avgDolphins = avgScore(teamDolphins);
var avgKoalas = avgScore(teamKoalas);

//Print the winner to the console, include the average score in the output
if (avgDolphins > avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
} else if (avgDolphins < avgKoalas) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
} else {
    console.log(`Draw (${avgDolphins} vs. ${avgKoalas})`);
}

//3. Include a requirement for a minimum score of 100
var teamDolphins = [97, 112, 101];
var teamKoalas = [109, 95, 123];

var avgDolphins = avgScore(teamDolphins);
var avgKoalas = avgScore(teamKoalas);

if (avgDolphins > avgKoalas && avgDolphins >= 100) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
} else if (avgDolphins < avgKoalas && avgKoalas >= 100) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
} else if (avgDolphins === avgKoalas) {
    console.log(`Draw (${avgDolphins} vs. ${avgKoalas})`);
} else {
    console.log("No team wins!");
}

//4. Bouns 1: Minimum score also applies to a draw
var teamDolphins = [97, 112, 101];
var teamKoalas = [109, 95, 106];

var avgDolphins = avgScore(teamDolphins);
var avgKoalas = avgScore(teamKoalas);

if (avgDolphins > avgKoalas && avgDolphins >= 100) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
} else if (avgDolphins < avgKoalas && avgKoalas >= 100) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
} else if (avgDolphins === avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
    console.log(`Draw (${avgDolphins} vs. ${avgKoalas})`);
} else {
    console.log("No team wins!");
}
