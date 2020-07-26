var pp1 = new Promise(function(resolve, reject) {
  resolve('PP1')
})

var pp2 = new Promise(function(resolve, reject) {
  resolve('PP2')
})

var myPP = new Promise(function(resolve, reject) {
  // resolve(pp1);
  /* new Promise(function(res, rej) {
    console.log('new Promise')
    // pp1.then(resolve, reject)
    pp1.then(res, rej)
  })
  .then(resolve, reject) */

  new Promise(function(res, rej) {
    // pp1.then(resolve, reject)
    pp2.then(res, rej)// promise then 新加入微任务队列
  })
  .then(resolve, reject);// promise then 新加入微任务队列
  // resolve(pp2)

})
.then(function(value) { console.log('PP1 - 1', value) })
.then(function(value) { console.log('PP1 - 2', value) })
.then(function(value) { console.log('PP1 - 3', value) })
.then(function(value) { console.log('PP1 - 4', value) })
.then(function(value) { console.log('PP1 - 5', value) })


new Promise(function(resolve) {
  resolve()
})
.then(function() { console.log('Promise - 1')})
.then(function() { console.log('Promise - 2')})
.then(function() { console.log('Promise - 3')})
.then(function() { console.log('Promise - 4')})
.then(function() { console.log('Promise - 5')})