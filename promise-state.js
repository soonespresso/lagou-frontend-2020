// Promise State //
/* const promise = new Promise((resolve, reject) => {
  reject();
});
console.log(promise); */

// Promise Simple Code //
/* 
const promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'promise resolve');
});
promise.then((value) => {
  console.log(value);
  console.log(promise);
}); */

// Promise Nested //

const promise = new Promise((resolve, reject) => {
  const nestCallback = () => {
    /* 
    resolve(new Promise((resolve, reject) => {
      console.log(promise);
      setTimeout(resolve, 2000, 'new promise resolve');
    }));
    */
    resolve({
      then: (resolve, reject) => {
        console.log(promise);
        setTimeout(resolve, 2000, 'new promise resolve');
      }
    });
  };
  setTimeout(nestCallback, 100, 'promise resolve');
});
promise.then((value) => {
  console.log(value);
  console.log(promise);
});