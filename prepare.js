/* function * foo(params) {
  console.log('zce')
  return 100
}

const result = foo()
console.log(result.next())
console.log('END')
 */


/* function * foo(params) {
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
console.log(generator.next()) */


// 案例1：发号器

/* function * createIdMaker() {
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
console.log(idMaker.next().value) */


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


 