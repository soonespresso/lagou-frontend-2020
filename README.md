# 参数默认值

> Default parameters

```js
// 多个参数是，带有默认值的参数一定要放在最后
function foo (bar, enable = true) {
  console.log('foo invoked - enable')
  console.log(enable)
}

foo()

```

# 剩余参数

> Rest parameters

```js
// ...args 仅出现在形参最后一位仅使用一次
function foo(first, ...args) {
  console.log(args);
}

foo(1, 2, 3, 4, 5)
// -> [ 1, 2, 3, 4, 5 ]
```

