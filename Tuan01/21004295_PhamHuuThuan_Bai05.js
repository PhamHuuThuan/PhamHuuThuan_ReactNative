function calAverage(score1, score2, score3){
    return (score1 + score2 + score3) / 3;
}
function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins >= 2*avgKoalas){
        console.log(`Dolphin win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if(avgKoalas >= 2*avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
    else{
        console.log('No winner!');
    }
}

var dolphinsData = [[44, 23, 71], [85, 54, 41]];
var koalasData = [[85, 54, 41], [23, 34, 27]];

for(var i = 0; i < 2; i++){
    var avgDolphins = calAverage(dolphinsData[i][0], dolphinsData[i][1], dolphinsData[i][2]);
    var avgKoalas = calAverage(koalasData[i][0], koalasData[i][1], koalasData[i][2]);
    checkWinner(avgDolphins, avgKoalas);
}