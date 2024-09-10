class CarCl{
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }
    accelerate(){
        this.speed += 10;
        console.log("Speed now is: " + this.speed);
    }
    brake(){
        this.speed -= 5;
        console.log("Speed now is: " + this.speed);
    }
}

class EVCl extends CarCl{
    #charge;
    constructor(make, speed, charge){
        super(make, speed);
        this.#charge = charge;
    }
    chargeBattery(chargeTo){
        this.#charge = chargeTo;
        console.log("Battery now is: " + this.#charge);
    }

    accelerate(){
        this.speed += 20;
        this.#charge -= 1;
        console.log("Speed now is: " + this.speed + " and Battery now is: " + this.#charge);
    }
}

//Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
let car1 = new EVCl("Rivian", 120, 23);
car1.accelerate();
car1.brake();
car1.chargeBattery(50);
car1.accelerate();