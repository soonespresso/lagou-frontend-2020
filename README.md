# 数组的解构

简化操作实例：

```js
function _array(...array) {
  console.log(array);
}
_array(1, 2, 3);

// -> [ 1, 2, 3 ]

function _object({...obj}) {
  console.log(obj);
}
const name = 'Darwin';
const age = 32;
_object([name, age])

// -> { '0': 'Darwin', '1': 32 }

const path = '/foo/bar/baz';
const [, rootDir] = path.split('/');
console.log(rootDir);

// -> foo
```



