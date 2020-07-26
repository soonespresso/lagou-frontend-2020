var p2 = new Promise(function(resolve, reject) {
  resolve('p2 resolve')
})
var p3 = new Promise(function(resolve, reject) {
  resolve('p3 resolve')
})
var p1 = new Promise(function(resolve, reject) {
  resolve(p3)
})

console.log(p1);

setTimeout(function() {

  p1.then(function(value) {
    console.log(p1);
    console.log('p1 then: ', value)
  })
  p2.then(function(value) {
    console.log('p2 then: ', value)
  })
}, 100);





var pp = new Promise(function(resolve, reject) {
  resolve('PP')
})

new Promise(function(resolve, reject) {

  new Promise(function(res, rej) {
    console.log(res)
    pp.then(res, rej)
  }).then(resolve)
})
.then(function(value) { console.log(value) })





var pp1 = new Promise(function(resolve, reject) {
  resolve('PP1')
})

new Promise(function(resolve, reject) {
  resolve(pp1);
})
.then(function(value) { console.log('PP1 - 1', value) })
.then(function(value) { console.log('PP1 - 2') })
.then(function(value) { console.log('PP1 - 3') })
.then(function(value) { console.log('PP1 - 4') })
.then(function(value) { console.log('PP1 - 5') })


new Promise(function(resolve) {
  resolve()
})
.then(function() { console.log('Promise - 1')})
.then(function() { console.log('Promise - 2')})
.then(function() { console.log('Promise - 3')})
.then(function() { console.log('Promise - 4')})
.then(function() { console.log('Promise - 5')})













new Promise(function(resolve, reject) {

  console.log('PromiseA start')

  const thenable = Promise.resolve()
  new Promise(
    function(res, rej) {
      thenable.then(res, rej)
    }
  )
  .then(resolve)
})
.then(function() { console.log('PromiseA - 1') })
.then(function() { console.log('PromiseA - 2') })
.then(function() { console.log('PromiseA - 3') })
.then(function() { console.log('PromiseA - 4') })
.then(function() { console.log('PromiseA - 5') })


new Promise(function(resolve) {

  console.log('PromiseB start')
  resolve()
})
.then(function() { console.log('PromiseB - 1')})
.then(function() { console.log('PromiseB - 2')})
.then(function() { console.log('PromiseB - 3')})
.then(function() { console.log('PromiseB - 4')})
.then(function() { console.log('PromiseB - 5')})





