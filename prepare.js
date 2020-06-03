const source = {
  a: 123,
  b: 456
}

const source1 = {
  b: 798,
  d: 798,
}

const target = {
  a: 456,
  c: 456
}

const result = Object.assign(source, source1, target)
console.log('source:', source);
console.log('source1:', source1);
console.log('target:', target);
console.log('result:', result);
console.log(target === result);
console.log(source === result);
console.log('\n\n');


function func(obj) {
  const funcObj = Object.assign({}, obj)
  funcObj.name = 'func obj'
  console.log(funcObj);
}

const obj = { name: 'global obj'}
func(obj)
console.log(obj)
console.log('\n\n');


console.log(0 == false)
console.log(0 === false)
console.log(-0 === +0)
console.log(NaN === NaN)
console.log(Object.is(+0, -0))
console.log(Object.is(NaN, NaN))