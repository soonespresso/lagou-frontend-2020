// function Person(name) {
//   this.name = name;
// }

// Person.prototype.say = function() {
//   console.log(`Hi, my name is ${this.name}`);
// };


class Person {

  constructor(name) {
    this.name = name;
  }

  say() {
    console.log(`Hi, my name is ${this.name}`);
  }

  static create(name) {
    console.log(this);
    return new Person(name);
  }
}

const person = Person.create('Darwin');

// const person = new Person();
// person.say();


class Student extends Person {

  constructor(name, number) {
    super(name);
    this.number = number;
  }

  hello() {
    this.say();
    console.log(`My school number is ${this.number}`);
  }
}

const student = new Student('Newton', '001');
console.log(student);
