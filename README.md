# Symbol

一种全新的原始数据类型，最主要的作用就是为对象添加独一无二的属性名

```js
// shared.js =================================

const cache = {};

// a.js ======================================

cache['foo'] = Math.random();

// b.js ======================================

cache['foo'] = '123';

console.log(cache);

console.log(
  Symbol() === Symbol()
);

console.log(Symbol('foo'));
console.log(Symbol('bar'));
console.log(Symbol('baz'));


// -> { foo: '123' }
// -> false
// -> Symbol(foo)
// -> Symbol(bar)
// -> Symbol(baz)


const obj = {};

obj[Symbol()] = '123';
obj[Symbol()] = '456';
console.log(obj);

const obj1 = {
  [Symbol()]: '123',
  [Symbol()]: '456',
};
console.log(obj1);

// -> { [Symbol()]: '123', [Symbol()]: '456' }
// -> { [Symbol()]: '123', [Symbol()]: '456' }


// a,js ======================================
// 创建私有成员

const name = Symbol();
const person = {
  [name]: 'Darwin',
  say () {
    console.log(this.name);
  }
};

// b.js ======================================
console.log(person[Symbol()]);


// -> undefined
```

截止到 ES2019 一共定义了 6种原始数据类型：

- String
- Number
- Boolean
- Null
- Undefined
- Symbol
- （BigInt）未来新增

加上 Object 类型一共是 7种数据类型。

# Symbol 补充

**Symbol.for**

内部维护一个全局注册表，为字符串和 Symbol 值提供一一对应的关系：

```js
console.log(Symbol('foo') === Symbol('foo'));
const s1 = Symbol.for('foo');
const s2 = Symbol.for('foo');
console.log(s1 === s2);


// -> false
// -> true
```

**Symbol 内置属性与属性获取**

```js
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


Symbol(Symbol.iterator)
Symbol(Symbol.hasInstance)
[object X Object]
foo
[ 'foo' ]
{"foo":"normal value"}
[ Symbol() ]
```

