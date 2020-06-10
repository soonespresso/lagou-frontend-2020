// for...of
/* 
const arr = [100, 200, 300, 400]

for (const item of arr) {
  console.log(item)
  if (item > 100)
    break
}

// arr.forEach() // 不能终止遍历
// arr.some()
// arr.every()

const map = new Map()
map.set('foo', '123')
map.set('bar', '456')

for (const [key, value] of map) {
  console.log(key, value);
}

const obj = { foo: 123, bar: 456 }
for (const item of obj) {
  console.log(item)
}
*/


// 迭代器（Iterable）
/* 
const set = new Set(['foo', 'bar', 'baz'])
const iterator = set[Symbol.iterator]()

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
 */


// 实现可迭代接口（Iterable）
/* const obj = {

  store: ['foo', 'bar', 'baz'],

  [Symbol.iterator]() {
    let index = 0
    const self = this;

    return {// iterator
      next() {
        return {// IterationResult
          value: self.store[index],
          done: index++ >= self.store.length
        }
      }
    }
  }
}

for (const item of obj) {
  console.log(item)
} */

// 迭代器设计模式
// 场景：协同开发一个任务清单应用

// My Code =========================

const todos = {
  life: ['eat', 'sleep', 'play'],
  learn: ['Java', 'C++', 'Python'],
  work: ['tea'],

  each(callback) {
    const all = [].concat(this.life, this.learn, this.work)
    for (const item of all) {
      callback(item)
    }
  },

  [Symbol.iterator]() {
    const all = [...this.life, ...this.learn, ...this.work];
    let index = 0;
    return {
      next() {
        return {
          value: all[index],
          done: index++ >= all.length
        }
      }
    }
  }
}

// Your Code =======================

todos.each((item) => {
  console.log(item)
})

console.log('\n')


for (const item of todos) {
  console.log(item)
}
