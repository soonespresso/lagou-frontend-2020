var p2 = new Promise((resolve, reject) => {
  resolve('p2');
});
var p1 = new Promise((resolve, reject) => {

  // resolve 如果被引入另一个 微任务 或者 

  /* setTimeout(function(v) {
    resolve(v);
  }, 100, 'p1'); */

  /* p2.then(function(v) {
    console.log(v);
    resolve('p1');
  }); */
  p2.then(resolve);
});

p1.then((value) => {
  console.log(p1);
  console.log(value);
})

/* var p3 = p1.then(function (value) {
  console.log(value);
});
var p4 = p3.then(function (value) {
  console.log(value);
}); */

console.log(p1, p2/* , p3, p4 */);