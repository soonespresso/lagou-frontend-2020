# const

let 基础上多了 「只读」—— 声明过后不允许再被修改。

声明变量时必须赋值，不能像 let、var 那样先声明后赋值：

```js
const name;
name = 'Darwin';
```

 ![const-error](assets/const-error.png)

## let + const + var

最佳实践：不用 var，主用 const，配合 let

