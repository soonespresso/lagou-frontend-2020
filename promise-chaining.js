// Promise 链式调用

function ajax(url) {

  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseText = 'json';
    xhr.onload = function() {
      if (this.status === 200) {
        // resolve 在异步调用中 所以是 pending
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    }
    xhr.send();
  });
}

const promise = ajax('/api/users.json');

const promise1 = promise.then(
  function onFulfilled(response) {
    console.log('onFulfilled', response);
    return ajax('/api/urls.json');
  },
  function onRejected(error) {
    console.warn('onRejected', error);
  }
);

console.log(promise1);
console.log(promise1 === promise);


ajax('/api/users.json')
  .then((value) => {
    console.log(11111)
    return ajax('/api/urls.json')
  })// => Promise
  .then((value) => {
    console.log(22222)
    console.log(value)
  })// => Promise
  .then((value) => {
    console.log(33333)
  })// => Promise
  .then((value) => {
    console.log(44444)
    return 'foo'
  })// => Promise
  .then((value) => {
    console.log(55555)
    console.log(value)
  })



/* const promise2 = promise1.then(
  function(value) {
    console.log(value);
  },
  function(error) {
    console.warn(error);
  },
);


console.log('promise:', promise);
console.log('promise1:', promise1);
console.log('promise2:', promise2);

setTimeout(function() {
  console.log('Promise:', promise);
  console.log('Promise1:', promise1);
  console.log('Promise2:', promise2);
}, 100) */


// setTimeout(function() { console.log(promise, promise1, promise2); }, 100);


 /* ajax('/api/users.json')
  .then(function(value) {
    console.log(111);
    return ajax('/api/urls.json');
  })
  .then(function(value) {
    console.log(222);
    console.log(value);
    return ajax('/api/urls.json');
  })
  .then(function(value) {
    console.log(333);
    return ajax('/api/urls.json');
  })
  .then(function(value) {
    console.log(444);
    return 'foo';
  })
  .then(function(value) {
    console.log(value);
    console.log(555);
  }) */