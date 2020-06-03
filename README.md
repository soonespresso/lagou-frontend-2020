# 对象扩展方法

## Object.assign

将多个源对象中的属性复制到一个目标对象中

```js
const source = {
  a: 123,
  b: 456
}

const source1 = {
  b: 798,
  d: 798,
}

const target = {
  a: 456,
  c: 456
}

const result = Object.assign(source, source1, target)
console.log('source:', source);
console.log('source1:', source1);
console.log('target:', target);
console.log('result:', result);
console.log(target === result);
console.log(source === result);

// -> source:  { a: 456, b: 798, d: 798, c: 456 }
// -> source1:  { b: 798, d: 798 }
// -> target:  { a: 456, c: 456 }
// -> result:  { a: 456, b: 798, d: 798, c: 456 }
// -> false
// -> true
```

用于复制

```js
function func(obj) {
  const funcObj = Object.assign({}, obj)
  funcObj.name = 'func obj'
  console.log(funcObj);
}

const obj = { name: 'global obj'}
func(obj)
console.log(obj)

// -> { name: 'func obj' }
// -> { name: 'global obj' }
```

## Object.is

判断两个值是否相等

```js
console.log(0 == false) // -> true
console.log(0 === false) // -> false
console.log(-0 === +0) // -> true
console.log(NaN === NaN) // -> false
console.log(Object.is(+0, -0)) // -> false
console.log(Object.is(NaN, NaN)) // -> true
```

