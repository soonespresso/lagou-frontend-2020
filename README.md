# Set 数据结构

```js
const set = new Set();
set
  .add(1)
  .add(2)
  .add(3)
  .add(3)
  .add(4)
  .add(5)
;
console.log(set);
set.forEach(i => console.log(i));
for (let i of set) { console.log(i); }
console.log(set.size);
console.log(set.has(100));
console.log(set.has(1));
console.log(set.delete(3));
set.clear();
console.log(set);


// -> Set { 1, 2, 3, 4, 5 }
// -> 1
// -> 2
// -> 3
// -> 4
// -> 5
// -> 1
// -> 2
// -> 3
// -> 4
// -> 5
// -> 5
// -> false
// -> true
// -> true
// -> Set {}


// 数组去重
const arr = [1, 2, 3, 4, 5, 4, 5, 6]
const result = new Set(arr);
// const resultArray = Array.from(result);
const resultArray = [...result];
console.log(result);
console.log(resultArray);


// -> Set { 1, 2, 3, 4, 5, 6 }
// -> [ 1, 2, 3, 4, 5, 6 ]
```

