// resolve(Promise.resolve()) //
new Promise((resolve, reject) => {
  console.log('promiseA start');
  // resolve(Promise.resolve());
  const thenable = Promise.resolve();
  new Promise((_resolve, _reject) => {
    thenable.then(_resolve, _reject);
  }).then(resolve);
}).then(() => {
  console.log('promiseA - 1');
}).then(() => {
  console.log('promiseA - 2');
}).then(() => {
  console.log('promiseA - 3');
}).then(() => {
  console.log('promiseA - 4');
}).then(() => {
  console.log('promiseA - 5');
});

new Promise((resolve) => {
  console.log('promiseB start');
  resolve();
}).then(() => {
  console.log('promiseB - 1');
}).then(() => {
  console.log('promiseB - 2');
}).then(() => {
  console.log('promiseB - 3');
}).then(() => {
  console.log('promiseB - 4');
}).then(() => {
  console.log('promiseB - 5');
});