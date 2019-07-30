// create a class Car : this function should accept 7 params:// name// mode// year// color// maxSpeed// fuelCapacity - optional parameter, use 60 by default// fuelConsumption - optional parameter, use 10 by default
var Car = function(name,model,year,color,maxSpeed,fuelCapacity,fuelConsumption){
    this.name = name;
    this.model=model;
    this.year = year;
    this.color=color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = fuelCapacity || 60;
    this.fuelConsumption = fuelConsumption || 10;
}
// implement a common car method getFullName, which should return a full name (e.x. name + model)
Car.prototype.getFullName=function(name,model){
    return this.name +' '+ this.model;
}
// implement a common car method getAge, which should return your car age (current year - your car year)
Car.prototype.getAge = function(){
    var currentYear = new Date().getFullYear();
    return currentYear - this.year
}
// implement a common car method changeColor, which should do: take a parameter (color); if your car already has the same color, show a message with text (up to you);if not, change the color and show a message about it.
Car.prototype.changeColor = function(NewColor){
	if (NewColor == this.color) {
		return 'Your car already has this color.';
	} else {
		this.color = NewColor;
		return 'Your car is now ' + NewColor;
	}
}
// implement a common car method calculateWay, which should do:take 2 params: kilometers and fuel;  check if fuel < 10, show a message about refuel;
// calculate the time that you need to reach the destination, show message about it; check, if you need to refuel on your road and show a message (how many times you need to refuel)
Car.prototype.calculateWay = function(kilometers, fuel){
    var time = kilometers / this.maxSpeed;
    var fuelForRoad = this.fuelConsumption * (kilometers / 100);
    var refuel;
    if (fuel < 10){
		return 'You need to refuel';
    };
    if ((fuelForRoad - fuel) > 0) {
        refuel = Math.trunc((fuelForRoad - fuel) / this.fuelCapacity) + 1;
        return 'You need to refuel ' + refuel + ' times';
    } else {
        return "You don't need to refuel" ;
    }
}
// create 3 another class, which should inherit from Car class in ES5 way (e.x. BMW, Lexus, etc. <--- up to you)
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype;
}
// create class properties, which should refers only to that particular car factory, and should not effect others( for example all BMW's would have sunroof, all Lexus's would have climateControl and so on (all properties is up to you) )
function BMW(model, year, color, maxSpeed, fuelCapacity, fuelConsumption, sunroof = true) {
    BMW.superclass.constructor.call(this, name = "BMW", model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
    this.sunroof = sunroof;
}
extend(BMW, Car);

function Lexus(model, year, color, maxSpeed, fuelCapacity, fuelConsumption, climateControl = true) {
    Lexus.superclass.constructor.call(this, name = "Lexus", model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
    this.climateControl = climateControl ;
}
extend(Lexus, Car);

function Audi(model, year, color, maxSpeed, fuelCapacity, fuelConsumption, gpsNavigation = true) {
    Audi.superclass.constructor.call(this, name = "Audi", model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
    this.gpsNavigation = gpsNavigation;
}

extend(Audi, Car);
// create methods, which should refers only to that particular car factory, and should not effect others
BMW.prototype.exDrive = function(){
    return "This car for the real man";
}
Audi.prototype.diesel = function(){
    return "This car consumes diesel";
}
// create at least one instance of each class
var volvo = new Car('volvo', 'xc70', '2011', 'silver', 280, 80, 11);
var x5 = new BMW('x5','2012', 'black', 270, 90, 10, sunroof= false);
var rx = new Lexus ('rx', '2009', 'red', 100, 12);
var a8 = new Audi('a8', 2018, 'black', 250, 90, 11, gpsNavigation = false);
