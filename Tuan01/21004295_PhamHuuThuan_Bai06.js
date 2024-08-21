function calcTip(bill){
    return (bill > 15 && bill < 300)?bill*0.15:bill*0.2;
}

var bills = [125, 555, 44];
var tips = [];
var totals = [];

for(var i = 0; i < bills.length; i++){
    tips[i] = calcTip(bills[i]);
    totals[i] = bills[i] + tips[i];

    console.log(`The bill was ${bills[i]}, the tip was ${tips[i]}, and the total value ${totals[i]}`)
}