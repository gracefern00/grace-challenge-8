// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// The Motorbike class extends the Vehicle class
class Motorbike extends Vehicle {
  /**
   * Constructor for the Motorbike class
   * @param {string} vin - The unique Vehicle Identification Number
   * @param {string} color - The color of the motorbike
   * @param {string} make - The make/brand of the motorbike
   * @param {string} model - The model of the motorbike
   * @param {number} year - The year of manufacture
   * @param {number} weight - The weight of the motorbike
   * @param {number} topSpeed - The top speed of the motorbike
   * @param {Wheel[]} wheels - The array of wheels
   */
  constructor(vin, color, make, model, year, weight, topSpeed, wheels) {
    // Call the parent class (Vehicle) constructor
    super(vin, color, make, model, year, weight, topSpeed, wheels);

    // Ensure the motorbike has exactly 2 wheels, create defaults if not
    if (!wheels || wheels.length !== 2) {
      this.wheels = [
        new Wheel(17, 'Default Brand'),
        new Wheel(17, 'Default Brand'),
      ];
    }
  }

  /**
   * Perform a wheelie with the motorbike
   */
  wheelie() {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  /**
   * Print the details of the motorbike
   */
  printDetails() {
    // Call the parent class's printDetails method
    super.printDetails();

    // Log motorbike-specific details
    console.log('Motorbike Details:');
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} kg`);
    console.log(`Top Speed: ${this.maxSpeed} km/h`);
    console.log(`Color: ${this.color}`);
    console.log('Wheels:', this.wheels.map((wheel, index) => `Wheel ${index + 1}: ${wheel.size}" - ${wheel.brand}`).join(', '));
  }
}

// Export the Motorbike class as the default export
export default Motorbike;