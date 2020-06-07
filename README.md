# Map 数据结构

```js
const obj = {};

obj[true] = 'value';
obj[123] = 'value';
obj[{ a: 1 }] = 'value';

console.log(Object.keys(obj));
console.log(obj[{}]);
console.log(obj['[object Object]']);

const map = new Map();
const person = { name: 'Darwin' };
map.set(person, 90);
map.set('age', 32);

map.forEach((value, key) => console.log(value, key));

console.log(map.get(person));
console.log(map.has({ name: 'Darwin' }));
map.delete(person);
console.log(map);
map.clear();
console.log(map);


// -> [ '123', 'true', '[object Object]' ]
// -> value
// -> value
// -> 90 { name: 'Darwin' }
// -> 32 age
// -> 90
// -> false
// -> Map { 'age' => 32 }
// -> Map {}
```

