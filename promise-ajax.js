// Promise 方式的 AJAX

function ajax(url) {

  return new Promise(function(resolve, reject) {
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
  })
}

ajax('/api/users.json').then(
  function (response) { console.log(response); },
  function (error) { console.error(error); }
)