# Class 类

```js
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
}

const person = new Person();
person.say();


// => Hi, my name is undefined
```

## 静态方法

ES 2015 中新增添加静态成员的 static 关键词

```js
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

// -> [Function: Person]
```

## 类的继承

```js
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


// -> Student { name: 'Newton', number: '001' }
```



