# 对象字面量增强

> Enhanced object literals

```js

const bar = '345'

const obj = {
  foo: 123,
  bar,

  method: function() {
    console.log('Method')
  },
  method1() {
    console.log('Method1')
    console.log(this);
  },
  [Math.random()]: 123
}
console.log(obj)
obj.method1()

// -> { foo: 123, bar: '345' }

// -> {
// ->   foo: 123,
// ->   bar: '345',
// ->   method: [Function: method],
// ->   method1: [Function: method1]
// ->   '0.37451525840330113': 123
// -> }
// -> Method1
// -> {
// ->   foo: 123,
// ->   bar: '345',
// ->   method: [Function: method],
// ->   method1: [Function: method1]
// ->   '0.37451525840330113': 123
// -> }
```

