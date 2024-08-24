//create array bills
var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
//create array tips
var tips = [];
//create array totals
var totals = [];
//create function calcTip
function calcTip(bill) {
    return (bill > 50 && bill < 300) ? bill * 0.15 : bill * 0.2;
}
//create function calcAverage
function calcAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
//create for loop to calculate tips and totals
for (var i = 0; i < bills.length; i++){
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}
//print bills, tips, totals
for (var i = 0; i < bills.length; i++){
    console.log(`The bill was ${bills[i]}, the tip was ${tips[i]}, and the total value ${totals[i]}`);
}
//print average of totals
console.log(`The average of totals is ${calcAverage(totals)}`);