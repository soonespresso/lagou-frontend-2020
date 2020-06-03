
const bar = '345'

const obj = {
  foo: 123,
  bar,

  method: function() {
    console.log('Method')
  },
  method1() {
    console.log('Method1')
    console.log(this);
  },
  [Math.random()]: 123
}
console.log(obj)
obj.method1()