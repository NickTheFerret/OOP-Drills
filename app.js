const person1 = {
    name: "Nick",
    sayHello: function () {
        console.log("Hello, My name is " + this.name)  //this refers to the context (this = person1)
    }
}
const person2 = {
    name: "Garrett",
    sayHello: function () {
        console.log("Hello, My name is " + this.name)
    }
}
const person3 = {
    name: "Nathan",
    sayHello: function () {
        console.log("Hello, My name is " + this.name)
    }
}
const person4 = {
    name: "Beth",
    sayHello: function () {
        console.log("Hello, My name is " + this.name)
    }
}
const person5 = {
    name: "Brayden",
    sayHello: function () {
        console.log("Hello, My name is " + this.name)
    }
}
person1.sayHello()
person2.sayHello()
person3.sayHello()
person4.sayHello()
person5.sayHello()



function Person(name, age, city) {
    this.name = name;
    this.city = city;
    this.age = age;
};
Person.prototype.sayHello = function () {
    console.log(`Hey! My name is ${this.name} I am ${this.age} years old and I live in ${this.city}`)
};

const person6 = new Person("Josh", 37, "Birmingham");
const person7 = new Person("Nick", 21, "Parrish");
const person8 = new Person("Garrett", 22, "Jasper");

person6.sayHello();
person7.sayHello();
person8.sayHello();


class Vehicle {
    constructor(manufacturer, numberOfWheels, vehicleType) {
        this.manufacturer = manufacturer;
        this.numberOfWheels = numberOfWheels;
        this.vehicleType = vehicleType;
    }
    aboutVehicle() {
        console.log(`This is a ${this.manufacturer} ${this.vehicleType} and
        has ${this.numberOfWheels} wheels`)
    }
}
class Truck extends Vehicle {
    constructor(manufacturer, numberOfWheels, vehicleType, numOfDoors, hasBed) {
        super(manufacturer, numberOfWheels, vehicleType) //calls the constructor for the parent class
        this.numOfDoors = numOfDoors;
        this.hasBed = hasBed;
    }

}
class Sedan extends Vehicle {
    constructor(manufacturer, numberOfWheels, vehicleType, size, mpg) {
        super(manufacturer, numberOfWheels, vehicleType)
        this.size = size;
        this.mpg = mpg;
    }
}

class Motorcycles extends Vehicle {
    constructor(manufacturer, numberOfWheels, vehicleType, hasHandleBars, hasDoors) {
        super(manufacturer, numberOfWheels, vehicleType)
        this.hasHandleBars = hasHandleBars;
        this.hasDoors = hasDoors;
    } 
}
const myBike = new Motorcycles("Harley-Davidson", 3, "Motorcycle", true, false)
myBike.aboutVehicle()

