class Vehicle {
    constructor(type, registrationNumber, color) {
        this.type = type;
        this.registrationNumber = registrationNumber;
        this.color = color;
    }
}

class Car extends Vehicle {
    constructor(registrationNumber, color) {
        super('Car', registrationNumber, color);
    }
}

class Bike extends Vehicle {
    constructor(registrationNumber, color) {
        super('Bike', registrationNumber, color);
    }
}

class Bus extends Vehicle {
    constructor(registrationNumber, color) {
        super('Bus', registrationNumber, color);
    }
}

class Slot {
    constructor(type, number) {
        this.type = type;
        this.number = number;
        this.isBooked = false;
    }
}

class ParkingFloor {
    constructor(floorNumber, maxLimit) {
        this.floorNumber = floorNumber;
        this.maxLimit = maxLimit;
        this.parkingSpots = [
            new Slot('Bus', 1),
            new Slot('Bike', 2),
            new Slot('Bike', 3),
            new Slot('Car', 4)
        ];
        this.vacantParkingSpots = this.parkingSpots.filter(spot => !spot.isBooked);
    }

    displayAvailableSlots() {
        return this.vacantParkingSpots;
    }

    parkVehicle(type) {
        let slots = this.parkingSpots.filter(spot => spot.type === type && !spot.isBooked);
        if (slots.length === 0) {
            return `${type} slots are full`;
        }
        slots[0].isBooked = true;
        this.vacantParkingSpots = this.parkingSpots.filter(spot => !spot.isBooked);
        return `Vehicle parked in slot number ${slots[0].number}`;
    }
}

export { Vehicle, Car, Bike, Bus, Slot, ParkingFloor }