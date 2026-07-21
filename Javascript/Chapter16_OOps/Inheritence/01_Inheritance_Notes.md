# Inheritance in JavaScript and TypeScript

## 1. What is inheritance?
Inheritance allows one class to reuse properties and methods from another class.

- Parent class: base class
- Child class: derived class
- The child class inherits features from the parent

## 2. JavaScript inheritance
JavaScript uses prototype-based inheritance.

- Classes in JS use the `extends` keyword
- `super()` is used to call the parent constructor
- Child methods can override parent methods

## 3. TypeScript inheritance
TypeScript also supports inheritance using the same `extends` keyword.

- It adds type safety
- Access modifiers like `public`, `private`, and `protected` are supported
- You can override methods with the same signature

## 4. Key points
- Use `extends` to inherit
- Use `super()` inside the child constructor
- Use `super.methodName()` to call parent methods
- Inheritance helps reduce duplication in code

## 5. Example idea
Parent: `Person`
Child: `Student` or `Employee`

The child can access parent behavior and add its own features.
