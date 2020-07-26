// 微任务

console.log('global start');

// 延迟是 0 会立即进入回调队列进行回调
setTimeout(() => { console.log('setTimeout') }, 0)

Promise.resolve()
  .then(() => console.log('promise'))
  .then(() => console.log('promise1'))
  .then(() => console.log('promise2'))
  .then(() => console.log('promise5'))

console.log('global end');
