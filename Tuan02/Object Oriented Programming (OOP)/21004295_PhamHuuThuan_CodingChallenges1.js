//1. car
function car(make, speed){
    this.make = make;
    this.speed = speed;
    this.accelerate = function(){
        this.speed += 10;
        console.log("Speed now is: " + this.speed);
    }
    this.brake = function(){
        this.speed -= 5;
        console.log("Speed now is: " + this.speed);
    }
}
let car1 = new car("BMW", 120);
car1.accelerate();
car1.brake();
car1.accelerate();
car1.brake();
car1.accelerate();

let car2 = new car("Mercedes", 95);
car2.accelerate();
car2.brake();
car2.brake();
car2.accelerate();
car2.accelerate();
car2.accelerate();