function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  return `${this.name} is eating`;
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  return `${this.name} is barking`;
};

const dog = new Dog("Tommy", "Labrador");
console.log(dog.eat());
console.log(dog.bark());
console.log(dog instanceof Animal);
console.log(dog instanceof Dog);
