# Reflect

MDN Reflect：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect

统一提供一套用于操作对象的API：

- Reflect 属于一个静态类
- Reflect 内部封装了一系列对对象的底层操作
- Reflect 成员方法就是 Proxy 处理对象的默认实现

例1：

```js
const obj = {
  foo: '123',
  bar: '456'
};

const proxy = new Proxy(obj, {
  get(target, property) {
    console.log('watch logic~');
    return Reflect.get(target, property);
  }
})

console.log(proxy.foo);
```

- 输出：

  ```
  watch logic~
  123
  ```

例2：

```js
const obj = {
  name: 'Darwin',
  age: 31
};

// console.log('name' in obj);
// console.log(delete obj['name']);
// console.log(Object.keys(obj));

console.log(Reflect.has(obj, 'name'));
console.log(Reflect.deleteProperty(obj, 'name'));
console.log(Reflect.ownKeys(obj));

```

- 输出：

  ```
  true
  true
  [ 'age' ]
  ```



