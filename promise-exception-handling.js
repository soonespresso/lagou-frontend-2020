// Promise 异常处理

function ajax(url) {

  return new Promise(function(resolve, reject) {
    // foo();
    // throw new Error('Promise Error');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseText = 'json';
    xhr.onload = function() {
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    }
    xhr.send();
  });
}


/* const promise = ajax('/api/users.json')
  .then(
    function onFulfilled(value) {
      console.log('onFulfilled', value);
      return ajax('/api/urls1.json');
    },
    function onRejected(error) {
      console.warn('onRejected', error);
    }
  );
console.log(promise) */


// 使用 catch 方法捕获异常
ajax('/api/users.json')
  .then(function(value) {
    console.log(value)
    return ajax('/api/user11.json')
  })// => Promise
  .catch(function(error) { console.warn(error) })// 实际上是给前面的 then 方法返回的 Promise 指定失败的回调，并不是第一个 Promise
