class Vehicle {
  protected brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  start(): string {
    return `${this.brand} is starting`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(brand: string, model: string) {
    super(brand);
    this.model = model;
  }

  showInfo(): string {
    return `${this.brand} ${this.model}`;
  }
}

const car = new Car("Toyota", "Fortuner");
console.log(car.start());
console.log(car.showInfo());
