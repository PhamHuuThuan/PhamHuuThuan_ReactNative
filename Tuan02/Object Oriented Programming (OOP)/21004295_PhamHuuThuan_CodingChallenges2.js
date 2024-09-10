//Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')

class CarCl {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }
    acclerate(){
        this.speed += 10;
        console.log("Speed now is: " + this.speed);
    }
    brake(){
        this.speed -= 5;
        console.log("Speed now is: " + this.speed);
    }
    speedUS(){
        return this.speed/1.6;
    }
}

let car1 = new CarCl("Ford", 120);
car1.acclerate();
car1.brake();
car1.acclerate();
car1.brake();
console.log(car1.speedUS());