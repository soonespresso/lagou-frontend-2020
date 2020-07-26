var outer = new Promise(function(resolve, reject) {
  resolve('outer');
});
var inner;
var promise = new Promise(function(resolve, reject) {
  inner = new Promise(
    function(res, rej) {
      outer.then(res, rej);
    }
  ).then(function() {
    resolve();
    console.log(inner, promise, outer);
  });
  console.log(inner, promise, outer);
})
.then(
  function(value) {
    console.log(inner, promise, outer);
    console.log('Promise', value)
  }
);


