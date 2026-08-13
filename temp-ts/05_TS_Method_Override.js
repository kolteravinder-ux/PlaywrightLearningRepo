"use strict";
class Person {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    greet() {
        return `Hello, I am ${this.name}`;
    }
}
class Employee extends Person {
    constructor(name, role) {
        super(name);
        this.role = role;
    }
    greet() {
        return `${super.greet()} and I work as ${this.role}`;
    }
}
const employee = new Employee("Ravi", "QA Engineer");
console.log(employee.greet());
