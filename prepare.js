const inc = n => n + 1;
console.log(inc(100))

const arr = [1, 2, 3, 4, 5, 6, 7]
console.log(arr.filter(i => i % 2));


const person = {
  name: 'Darwin',
  sayHi: function() {
    console.log(`Hi, my name is ${this.name}`)
  },
  sayHello: () => {
    console.log(`Hello, my name is ${this.name}`)
  },
  sayHiAsync: function() {
    /* setTimeout(function() {
      console.log(this)
      console.log(`Hi, my name is ${this.name}`)
    }, 1000) */
    setTimeout(() => {
      console.log(this)
      console.log(`Hi, my name is ${this.name}`)
    }, 1000)
  },
}
person.sayHi()
person.sayHello()
person.sayHiAsync()



