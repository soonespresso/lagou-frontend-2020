# 箭头函数

> Arrow functions

```js
const inc = n => n + 1;
console.log(inc(100))

// => 101

const arr = [1, 2, 3, 4, 5, 6, 7]
console.log(arr.filter(i => i % 2));

// => [ 1, 3, 5, 7 ]

```

# 箭头函数与 this

箭头函数不会改变 this 的指向

```js
const inc = n => n + 1;
console.log(inc(100))

const arr = [1, 2, 3, 4, 5, 6, 7]
console.log(arr.filter(i => i % 2));


const person = {
  name: 'Darwin',
  sayHi: function() {
    console.log(`Hi, my name is ${this.name}`)
  },
  sayHello: () => {
    console.log(`Hello, my name is ${this.name}`)
  },
  sayHiAsync: function() {
    /* setTimeout(function() {
      console.log(this)
      console.log(`Hi, my name is ${this.name}`)
    }, 1000) */
    setTimeout(() => {
      console.log(this)
      console.log(`Hi, my name is ${this.name}`)
    }, 1000)
  },
}
person.sayHi()
person.sayHello()
person.sayHiAsync()


// => Hi, my name is Darwin
// => Hello, my name is undefined
// => {
// =>   name: 'Darwin',
// =>   sayHi: [Function: sayHi],
// =>   sayHello: [Function: sayHello],
// =>   sayHiAsync: [Function: sayHiAsync]
// => }
// => Hi, my name is Darwin
```

> 类、对象内部定义的函数，this 指向都是全局对象，但会受到作用域的限制
>
> ```js
> function Person() {
> 
>   function say() {
>     console.log(this);
>   }
>   say();
> }
> function Student() {
> 
>   function hello() {
>     console.log(this);
>   }
>   hello();
> }
> 
> new Person();
> new Student();
> 
> hello();
> // => Window {}
> // => Window {}
> // => Window {}
> // => hello is not defined
> 
> 
> ```





