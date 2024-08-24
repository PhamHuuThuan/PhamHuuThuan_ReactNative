//Create objects
var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calBMI: function(){
        this.BMI = this.mass/(this.height*this.height);
        return this.BMI;
    }
}

var john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calBMI: function(){
        this.BMI = this.mass/(this.height*this.height);
        return this.BMI;
    }
}

mark.calBMI();
john.calBMI();

if(mark.BMI > john.BMI){
    console.log(mark.fullName + "'s BMI ("+ mark.BMI +") is higher than "+ john.fullName +"'s("+ john.BMI +")!");
}else if(mark.BMI < john.BMI){
    console.log(john.fullName + "'s BMI ("+ john.BMI +") is higher than "+ mark.fullName +"'s("+ mark.BMI +")!");
}else{
    console.log("They have the same BMI!");
}

