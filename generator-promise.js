// Generator 配合 Promise 的异步方案

function ajax(url) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.responseType = 'json'
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response)
      } else {
        reject(new Error(xhr.statusText))
      }
    }
    xhr.send()
  })
}

function * main() {
  try {
    const users = yield ajax('/api/users.json')
    console.log(users)
    
    const posts = yield ajax('/api/posts.json')
    console.log(posts)
  
    const urls = yield ajax('/api/urls11.json')
    console.log(urls)  
  } catch (error) {
    console.log(error);
  }
}

/* function callMain(generator, data) {
  const result = generator.next(data)
  if (result.done) {
    return;
  }
  result.value.then(data => {
    callMain(generator, data)
  })
}

callMain(main()) */

function handleResult(result) {
  if (result.done) return
  result.value.then(data => {
    handleResult(g.next(data))
  }, error => {
    g.throw(error)
  })
}

const g = main()
handleResult(g.next())

/* const result = generator.next()
result.value.then(data => {
  const result2 = generator.next(data)
  result2.value.then(data => {
    generator.next(data)
  })
}) */