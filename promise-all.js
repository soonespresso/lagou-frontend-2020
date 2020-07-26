// Promise 并行执行 //

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

/* 
const promise = Promise.all([
  ajax('/api/users.json'),
  ajax('/api/urls11.json')
]);

promise.then(function(values) {
  console.log(JSON.parse(values[0]));
  console.log(JSON.parse(values[1]));
}).catch((error) => console.warn(error));
 */

// ajax('/api/urls.json')
//   .then(value => {
//     const urls = Object.values( eval('(' + value + ')') );
//     const tasks = urls.map(url => ajax(url));
//     return Promise.all(tasks);
//   })
//   .then(values => console.log( eval('(' + values + ')') ));

// ajax('/api/urls.json')
//   .then(value => {
//     const urls = Object.values(eval('(' + value + ')'))
//     const tasks = urls.map(url => ajax(url))
//     return Promise.all(tasks)
//   })
//   .then(values => {
//     // console.log(eval('[(' + values + ')]'))
//     console.log(values.map(value => JSON.parse(value)))
//   })


const request = ajax('/api/posts.json')
const timeout = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('timeout')), 500)
})

// 500 毫秒内返回请求相应，之后相应不返回
Promise.race([request, timeout])
  .then(value => console.log(value))
  .catch(error => console.warn(error))