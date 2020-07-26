var p2 = new Promise((resolve, reject) => {
  resolve('p2')
});
var p1 = new Promise((resolve, reject) => {
  resolve('p1')
});

var p33
var p3 = p1.then(function (value) {
  console.log('p1.then');
  console.log(p1, p2, p3, p4);
  console.log(value);
  // return p2;

  // p33 的 value 赋值给 p3
  // p33 = new Promise(function (resolve) { resolve('p3') });

  // promise.then() 生成的 Promise 对象，可以继续 .then();
  p33 = new Promise(function (resolve) { resolve('p3') }).then(function() {});
  console.log(p3, p33, p3 == p33);
  return p33;
});
var p4 = p3.then(function (value) {
  console.log('p3.then');
  console.log(p1, p2, p3, p4);
  console.log(value);
  // console.log(p2, p3, p4, p2 == p3);
});

console.log(p1, p2, p3, p4);