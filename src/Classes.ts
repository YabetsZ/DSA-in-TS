class Vehicle {
  drive(): void {
    console.log("I am driving now!");
  }
  honk(): void {
    console.log("Beeeeeeeeeeeep");
  }
}

const vehicle = new Vehicle();
vehicle.drive();
