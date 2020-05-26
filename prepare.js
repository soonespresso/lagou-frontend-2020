function _array(...array) {
  console.log(array);
}
_array(1, 2, 3);


function _object({...obj}) {
  console.log(obj);
}
const name = 'Darwin';
const age = 32;
_object([name, age])


const path = '/foo/bar/baz';
const [, rootDir] = path.split('/');
console.log(rootDir);
