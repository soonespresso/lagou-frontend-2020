// Promise 静态方法 //

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


const promise1 = ajax('/api/users.json')
const promise2 = Promise.resolve(promise1)

console.log(promise1 === promise2)

Promise.resolve({
  then: function(onFulfilled, onRejected) {
    onFulfilled('On')
  }
}).then((value) => { console.log(value) })


Promise.reject(new Error('reject'))
  .catch((error) => console.warn(error))