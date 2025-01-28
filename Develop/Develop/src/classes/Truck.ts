// Import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// The Truck class extends the Vehicle class and implements the AbleToTow interface
class Truck extends Vehicle {
  /**
   * Constructor for the Truck class
   * @param {string} vin - The unique Vehicle Identification Number
   * @param {string} color - The color of the truck
   * @param {string} make - The make/brand of the truck
   * @param {string} model - The model of the truck
   * @param {number} year - The year of manufacture
   * @param {number} weight - The weight of the truck
   * @param {number} topSpeed - The top speed of the truck
   * @param {Wheel[]} wheels - The array of wheels
   * @param {number} towingCapacity - The towing capacity of the truck
   */
  constructor(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
    // Call the parent class (Vehicle) constructor
    super(vin, color, make, model, year, weight, topSpeed, wheels);

    // Ensure the truck has exactly 4 wheels, create defaults if not
    if (!wheels || wheels.length !== 4) {
      this.wheels = [
        new Wheel(20, 'Default Brand'),
        new Wheel(20, 'Default Brand'),
        new Wheel(20, 'Default Brand'),
        new Wheel(20, 'Default Brand'),
      ];
    }

    // Initialize the towing capacity
    this.towingCapacity = towingCapacity;
  }

  /**
   * Tow another vehicle
   * @param {Truck | Motorbike | Car} vehicle - The vehicle to be towed
   */
  tow(vehicle) {
    const vehicleDescription = `${vehicle.make} ${vehicle.model}`;
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`${this.make} ${this.model} is towing the ${vehicleDescription}.`);
    } else {
      console.log(`${vehicleDescription} is too heavy to be towed by ${this.make} ${this.model}.`);
    }
  }

  /**
   * Print the details of the truck
   */
  printDetails() {
    // Call the parent class's printDetails method
    super.printDetails();

    // Log truck-specific details
    console.log('Truck Details:');
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} kg`);
    console.log(`Top Speed: ${this.maxSpeed} km/h`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing Capacity: ${this.towingCapacity} kg`);
    console.log('Wheels:', this.wheels.map((wheel, index) => `Wheel ${index + 1}: ${wheel.size}" - ${wheel.brand}`).join(', '));
  }
}

// Export the Truck class as the default export
export default Truck;