function checkDogs(dogsJulia, dogsKate){
    const dogsJuliaCopy = dogsJulia.slice(1, -2);
    const dogs = dogsJuliaCopy.concat(dogsKate);
    dogs.forEach(function(dog, i){
        console.log("Dog number " + i + " is " + (dog >= 3 ? " an adult, and is " + dog + " years old" : " still a puppy"));
    });
}
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);