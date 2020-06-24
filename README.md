# ECMAScript 2016

```js
// ECMAScript 2016 //

// Array.prototype.includes

const arr = ['foo', 1, NaN, false];

console.log(arr.indexOf('foo'));
console.log(arr.indexOf('bar'));
console.log(arr.indexOf(NaN));
console.log(arr.includes(NaN));

// -> 0
// -> -1
// -> -1
// -> true


// 指数运算符

console.log(Math.pow(2, 10));
console.log(2 ** 10);


// -> 1024
// -> 1024

```

# ECMAScript 2017

```js
// ECMAScript 2017 //

const obj = {
  foo: 'value1',
  bar: 'value2',
}

// Object.values

console.log(Object.values(obj));

// -> [ 'value1', 'value2' ]


// Object.entries

for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}

console.log(new Map(Object.entries(obj)));

// -> foo value1
// -> bar value2
// -> Map { 'foo' => 'value1', 'bar' => 'value2' }


// Object.getOwnPropertyDescriptors

const lannister1 = {
  firstName: 'Tywin',
  lastName: 'Lannister',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const lannister2 = Object.assign({}, lannister1);
lannister2.firstName = 'Tyrion';
console.log(lannister2, lannister2.fullName);


const descriptors = Object.getOwnPropertyDescriptors(lannister1);
console.log(descriptors);

const lannister2_1 = Object.defineProperties({}, descriptors);
lannister2_1.firstName = 'Tyrion';
console.log(lannister2_1.fullName);

// -> {
// ->   firstName: 'Tyrion',
// ->   lastName: 'Lannister',
// ->   fullName: 'Tywin Lannister'
// -> } Tywin Lannister
// ->
// -> {
// ->   firstName: {
// ->     value: 'Tywin',
// ->     writable: true,
// ->     enumerable: true,
// ->     configurable: true
// ->   },
// ->   lastName: {
// ->     value: 'Lannister',
// ->     writable: true,
// ->     enumerable: true,
// ->     configurable: true
// ->   },
// ->   fullName: {
// ->     get: [Function: get fullName],
// ->     set: undefined,
// ->     enumerable: true,
// ->     configurable: true
// ->   }
// -> }
// ->
// -> Tyrion Lannister


// String.prototype.padStart / String.prototype.padEnd

const books = {
  html: 5,
  css: 16,
  javascript: 128
};

for (const [name, count] of Object.entries(books)) {
  console.log(`${name.padEnd(12, '-')}|${count.toString().padStart(3, '0')}`);
}

// -> html--------|005
// -> css---------|016
// -> javascript--|128

// 在函数参数中添加尾逗号

function foo(bar, baz, ) {

}

const list = [100, 200, 300, ]
```

