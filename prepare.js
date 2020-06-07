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

