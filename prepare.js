const person = {};

Object.defineProperty(person, 'name', {
  get() {
    console.log('name get()');
    return person._name;
  },
  set(value) {
    console.log('name set()');
    person._name = value;
  }
});

Object.defineProperty(person, 'age', {
  get() {
    console.log('age get()');
    return person._age;
  },
  set(value) {
    console.log('age set()');
    person._age = value;
  }
});

person.age = 'Darwin';
console.log(person.age, person);


/* const list = [];
const listProxy = new Proxy(list, {
  set(target, property, value) {
    console.log('set', property, value);
    target[property] = value;
    return true; // 表示设置成功
  }
});

listProxy.push(100);
listProxy.push(99);
 */
/* const person = {
  name: 'Darwin',
  age: 20
};

const personProxy = new Proxy(person, {

  deleteProperty(target, property) {
    console.log('delete', property);
    delete target[property];
  }
});

delete personProxy.age;
console.log(person); */


/* const personProxy = new Proxy(person, {
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
personProxy.age = '10'; */