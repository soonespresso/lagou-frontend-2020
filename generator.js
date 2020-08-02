// 生成器函数回顾 //
function * foo() {
  console.log('start')

  try {
    // 使用 yield 关键词向外返回值
    // 暂定生成器
    const res = yield 'foo'
    console.log(res)  
  } catch (error) {
    console.warn(error)    
  }
}

const generator = foo()
console.log(generator)
console.log('generator')
const result = generator.next('Darwin')
console.log(result)
// next() 传参可以作为 yield 的返回值
// console.log(generator.next('Newton'))

// 向生成器内部抛出异常
console.log(generator.throw(new Error('Generator Error')))
