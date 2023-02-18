/*
## Problem 1.
*/

function productFactory(name, price) {
    return {
        name,
        price,
        increasePrice(amount) {
            this.price += amount;
        },
        decreasePrice(amount) {
            this.price -= amount;
        },
        displayInfo() {
            const message = `${this.name} costs Rs.${this.price}`;
            console.log(message);
            return message;
        }
    };
}

// example invocation
// let p1 = new productFactory("Notebook", 400);
// console.log(p1);
// p1.decreasePrice(100);
// p1.displayInfo();
// p1.increasePrice(200);
// p1.displayInfo();

/*
## Problem 2.
*/
function ProductConstructor(name, price) {
    this.name = name;
    this.price = price;

    this.increasePrice = function(amount) {
        this.price += amount;
    };

    this.decreasePrice = function(amount) {
        this.price -= amount;
    };

    this.displayInfo = function() {
        const message = `${this.name} costs Rs.${this.price}`;
        console.log(message);
        return message;
    };
}

// example invocation
// let p1 = new ProductConstructor("Notebook", 400);
// console.log(p1);
// p1.decreasePrice(100);
// p1.displayInfo();
// p1.increasePrice(200);
// p1.displayInfo();

/*
## Problem 3.
*/
class ProductClass {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    increasePrice(amount) {
        this.price += amount;
    }

    decreasePrice(amount) {
        this.price -= amount;
    }

    displayInfo() {
        const message = `${this.name} costs Rs.${this.price}`;
        console.log(message);
        return message;
    }
}

// let p1 = new Product("Notebook", 400);
// console.log(p1);
// p1.decreasePrice(100);
// p1.displayInfo();
// p1.increasePrice(200);
// p1.displayInfo();

export { productFactory, ProductConstructor, ProductClass }