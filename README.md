# 生成器

> Generator

避免异步编程中回调嵌套过深，提供更好的异步编程解决方案

```js
function * foo(params) {
  console.log('zce')
  return 100
}

const result = foo()
console.log(result.next())
console.log('END')

// -> zce
// -> { value: 100, done: true }
// -> END
```

生成器函数会返回一个生成器对象，调用该对象的 next 方法，才会让生成器函数的函数体开始执行，执行过程中一旦遇到了 yield 关键词，执行过程就会被暂停。而且 yield 后面的值将会作为 next 的结果返回。继续调用生成器对象的 next 方法，会从生成器函数暂停的地方继续执行，周而复始直至完全结束。—— 惰性执行。

```js

function * foo(params) {
  console.log('111111')
  yield 100
  console.log('222222')
  yield 200
  console.log('333333')
  yield 300
}

const generator = foo()
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())

// -> 111111
// -> { value: 100, done: false }
// -> 222222
// -> { value: 200, done: false }
// -> 333333
// -> { value: 300, done: false }
// -> { value: undefined, done: true }
```

# 生成器应用

```js
// 案例1：发号器

function * createIdMaker() {
  let id = 1
  while (true) {
    yield id++
  }
}

const idMaker = createIdMaker()
console.log(idMaker.next().value)
console.log(idMaker.next().value)
console.log(idMaker.next().value)
console.log(idMaker.next().value)
console.log(idMaker.next().value)

// -> 1
// -> 2
// -> 3
// -> 4
// -> 5
```

```js
// 使用 Generator 函数实现 iterator 方法

const todos = {
  life: ['eat', 'sleep', 'play'],
  learn: ['C++', 'Java', 'Python'],
  work: ['Coding'],
  [Symbol.iterator]: function* () {
    const all = [...this.life, ...this.learn, ...this.work]
    for (const item of all) {
      yield item
    }
  }
}

for (const item of todos) {
  console.log(item)
}


// -> eat
// -> sleep
// -> play
// -> C++
// -> Java
// -> Python
// -> Coding
```

