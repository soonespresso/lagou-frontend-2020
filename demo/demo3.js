var inner;
var p1 = new Promise((resolve, reject) => {
  function F() {
    inner = new Promise(
      (resolve, reject) => {
        console.log(p1);
        setTimeout(resolve, 2000, 'new Promise resolve');
      }
    );
    resolve()
  }
  setTimeout(F, 1000, 'p1 resolve');
});
p1.then(function (value) {
  console.log(value);
  console.log(p1, inner);
})