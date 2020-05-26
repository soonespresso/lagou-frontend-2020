# 模板字符串字面量

支持多行字符串：

```js
const str = `Hello ES2015, 
this is a \`string.\``;
console.log(str);

```

 ![string-line-break](assets/string-line-break.png)

插值表达式：

```js
const str = `Hello ES2015, 
this is a \`string.\``;
console.log(str);

const name = 'Darwin';
const msg = `Hey, ${name} —— ${1 + 2} —— ${Math.random()}`;
console.log(msg);

// -> Hey, Darwin —— 3 —— 0.02066608045440055
```

