function Car(make, speed){
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log("Speed now is: " + this.speed);
}

Car.prototype.brake = function(){
    this.speed -= 5;
    console.log("Speed now is: " + this.speed);
}

function EV(make, speed, charge){
    Car.call(this, make, speed);
    this.charge = charge;
}

//ke thua phuong thuc cua Car
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo;
    console.log("Battery now is: " + this.charge);
}

EV.prototype.accelerate = function(){
    this.speed += 20;
    this.charge -= 1;
    console.log("Speed now is: " + this.speed + " and Battery now is: " + this.charge);
}

let tesla = new EV("Tesla", 120, 23);
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
tesla.accelerate();
tesla.accelerate();