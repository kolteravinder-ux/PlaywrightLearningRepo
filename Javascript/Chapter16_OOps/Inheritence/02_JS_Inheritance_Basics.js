class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, I am ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, course) {
    super(name);
    this.course = course;
  }

  study() {
    return `${this.name} is studying ${this.course}`;
  }
}

const student = new Student("Ravi", "TypeScript");
console.log(student.greet());
console.log(student.study());
console.log(student instanceof Person);
