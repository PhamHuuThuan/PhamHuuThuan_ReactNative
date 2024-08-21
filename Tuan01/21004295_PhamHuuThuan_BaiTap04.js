function calculateTip(bill){
    return (bill>50 && bill<300)?bill*0.15:bill*0.2;
}

var bill = [275, 40, 430];

for(var i = 0; i < bill.length; i++){
    var tip = calculateTip(bill[i]);
    console.log(`The bill was ${bill[i]}, the tip was ${tip}, and the total value ${bill[i]+tip}`)
}