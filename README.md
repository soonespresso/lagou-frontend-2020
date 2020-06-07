# Proxy

> 代理对象

如果想要监视某个对象的读写，可以使用 ES5 的 Object.defineProperty 方法对对象添加属性，来捕获对象的读写过程。在 ES2015 可以使用 Proxy 来实现。

```js
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


// -> { name: 'Darwin', age: 20 } name
// -> Darwin
// -> { name: 'Darwin', age: 20 } title
// -> default
// -> { name: 'Darwin', age: 20, gender: true } gender true
// -> { name: 'Darwin', age: 100, gender: true } age 100
// -> E:\Workstation\Webland\MyCourse\Kaiwulagou\lagou-frontend-2020\prepare.js:14
// ->         throw new TypeError(`${value} is not an int`);
// ->         ^
// -> 
// -> TypeError: 10 is not an int
```



