// Problem 1. 

function Character(name) {
    this.name = name || 'unnamed';

}
Character.prototype.setName = function(name) {
    return this.name = name;
}

let C = new Character();
Warrior.prototype.increaseStrength = function() {
    return this.strength = this.strength + 100;
};
Warrior.prototype.decreaseStrength = function() {
    return this.strength = this.strength - 100;
};
Object.setPrototypeOf(Warrior.prototype, Character.prototype)

function Warrior(strength) {
    this.strength = strength || 0;
    Character.call(this)


}


let W = new Warrior();
Object.setPrototypeOf(Knight.prototype, Warrior.prototype)

Knight.prototype.setWeapon = function(x) {
    return this.weapon = x;
};

function Knight(weapon) {
    Warrior.call(this)
    this.weapon = weapon || 'no weapon';

}
let K = new Knight()
    // console.log(K)

// console.log(K)

// Problem 2.

class Vehicle {
    constructor(make) {
        this.make = make;

    }
    setMake(x) {
        return this.make = x;
    }
}

let V = new Vehicle('Harry')
class Car extends Vehicle {
    constructor(make, model) {
        super(make);
        this.model = model;
    }
}
let c = new Car('ZYZ', 'hello')

class Truck extends Car {
    constructor(make, model, bedSize) {
        super(make, model);
        this.bedSize = bedSize;
    }
}
let Tr = new Truck('ZYZ', 'hello', 5)
    // let t = new Truck('helo', 'a', 'b')
class Motorcycle extends Truck {
    constructor(make, model, bedSize, engineSize) {
        super(make, model, bedSize);
        this.engineSize = engineSize;
    }
}
let m = new Motorcycle("Bajaj", 'f', 5, 'hg')
    // console.log(m)
    // console.log(M.setMake('Hello'))



export { Character, Warrior, Knight, Vehicle, Car, Truck, Motorcycle }