/* const obj = {
  foo: '123',
  bar: '456'
};

const proxy = new Proxy(obj, {
  get(target, property) {
    console.log('watch logic~');
    return Reflect.get(target, property);
  }
})

console.log(proxy.foo); */

const obj = {
  name: 'Darwin',
  age: 31
};

// console.log('name' in obj);
// console.log(delete obj['name']);
// console.log(Object.keys(obj));

console.log(Reflect.has(obj, 'name'));
console.log(Reflect.deleteProperty(obj, 'name'));
console.log(Reflect.ownKeys(obj));


