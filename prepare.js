// shared.js =================================

const cache = {};

// a,js ======================================

cache['foo'] = Math.random();

// b,js ======================================

cache['foo'] = '123';

console.log(cache);

console.log(
  Symbol() === Symbol()
);

console.log(Symbol('foo'));
console.log(Symbol('bar'));
console.log(Symbol('baz'));


const obj = {};

obj[Symbol()] = '123';
obj[Symbol()] = '456';
console.log(obj);

const obj1 = {
  [Symbol()]: '123',
  [Symbol()]: '456',
};
console.log(obj1);



// 创建私有成员

const name = Symbol();
const person = {
  [name]: 'Darwin',
  say () {
    console.log(this.name);
  }
};


console.log(person[Symbol()]);



console.log(Symbol('foo') === Symbol('foo'));
const s1 = Symbol.for('foo');
const s2 = Symbol.for('foo');
console.log(s1 === s2);


console.log(Symbol.for(true) === Symbol.for('true'));
console.log(Symbol.iterator);
console.log(Symbol.hasInstance);

const obj2 = {
  [Symbol.toStringTag]: 'X Object'
  // toString() { return 'X Object' }
};
console.log(obj2.toString());


const obj3 = {
  [Symbol()]: 'symbol value',
  foo: 'normal value'
};

for (let key in obj3) {
  console.log(key);
}
console.log(Object.keys(obj3));
console.log(JSON.stringify(obj3));
console.log(Object.getOwnPropertySymbols(obj3));
