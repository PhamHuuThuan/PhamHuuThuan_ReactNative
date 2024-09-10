function Dog(weight, curFood, owners){
    this.weight = weight;
    this.curFood = curFood;
    this.owners = owners;
    this.recommendFood = function(){
        return this.weight * 0.75 * 28;
    }
}



const dogs = [
    new Dog(22, 250, ['Alice', 'Bob']),
    new Dog(8, 200, ['Matilda']),
    new Dog(13, 275, ['Sarah', 'John']),
    new Dog(32, 340, ['Michael'])
];
dogs.forEach(dog => console.log(dog.recommendFood()));

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah.curFood > dogSarah.recommendFood() ? 'Eating too much' : 'Eating too little');

const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendFood()).flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendFood()).flatMap(dog => dog.owners);

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

console.log(dogs.some(dog => dog.curFood === dog.recommendFood()));

const checkEatingOkay = dog => dog.curFood > dog.recommendFood() * 0.9 && dog.curFood < dog.recommendFood() * 1.1;
console.log(dogs.some(checkEatingOkay));

const dogsEatingOkay = dogs.filter(checkEatingOkay);
console.log(dogsEatingOkay);

const dogsSorted = dogs.slice().sort((a, b) => a.recommendFood() - b.recommendFood());
console.log(dogsSorted);

