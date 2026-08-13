class Person {
  constructor(public name: string) {
    this.name=name
  }

  greet(): string {
    return `Hello, I am ${this.name}`;
  }
}

class Employee extends Person {
  constructor(name: string, public role: string) {
    super(name);
  }

  override greet(): string {
    return `${super.greet()} and I work as ${this.role}`;
  }
}

const employee = new Employee("Ravi", "QA Engineer");
console.log(employee.greet());
