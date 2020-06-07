const person = {
  name: 'Darwin',
  age: 20
};

const personProxy = new Proxy(person, {
  get(target, property) {
    console.log(target, property);
    return property in target ? target[property] : 'default';
  },
  set(target, property, value) {
    if (property === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError(`${value} is not an int`);
      }
    }
    target[property] = value;
    console.log(target, property, value);
  }
});

console.log(personProxy.name);
console.log(personProxy.title);

personProxy.gender = true;
personProxy.age = 100;
personProxy.age = '10';