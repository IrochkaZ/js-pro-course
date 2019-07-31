class Car {
    constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.fuelCapacity = fuelCapacity;
        this.fuelConsumption = fuelConsumption;
    }

    getFullName(){
        return this.name + " " + this.model;
    }

    getAge() {
        let currentYear = new Date().getFullYear();
        return currentYear - this.year
    }

    changeColor(color) {
        if (this.color == color) {
            return "Your car already has this color.";
        } else {
            this.color = color;
            return "Your car has new color: " + color;
        }
    }

    calculateWay(kilometers, fuel) {
        let time = kilometers / this.maxSpeed;
        let fuelForRoad = this.fuelConsumption * (kilometers / 100);
        let refuel;
        if (fuel < 10) {
            return "You need to refuel";
        }
        if ((fuelForRoad - fuel) > 0) {
            refuel = Math.trunc((fuelForRoad - fuel) / this.fuelCapacity) + 1;
            return "You need to refuel " + refuel + " times";
        } else {
            return "You don't need to refuel";
        }
    }
}
class BMW extends Car {
    constructor(model, year, color, maxSpeed, fuelCapacity, fuelConsumption, sunroof = true) {
        super(name = "BMW", model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
        this.sunroof = sunroof;
    }

    getModel() {
        return this.model;
    }
}

class Lexus extends Car {
    constructor(model, year, color, maxSpeed, fuelCapacity, fuelConsumption, climateControl = true) {
        super(name = "Lexus", model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
        this.climateControl = climateControl;
    }

    getColor() {
        return this.color;
    }
}

class Audi extends Car {
    constructor(model, year, color, maxSpeed, fuelCapacity, fuelConsumption, gpsNavigation = true) {
        super(name = "Lexus", model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
        this.gpsNavigation = gpsNavigation;
    }

    getmaxSpeed() {
        return this.maxSpeed;
    }
}
const audi = new Audi("A6", 2015, "grey", 160, 90, 8, true );
const bmw = new BMW("M5", 2019, "black", 230, 95, 8, false);
const lexus = new Lexus("RC", 2017, "white", 200, 100,10, true);