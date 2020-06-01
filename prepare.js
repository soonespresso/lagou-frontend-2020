function foo (bar, enable = true) {
  console.log('foo invoked - enable')
  console.log(enable)
}

foo()

function foo(...args) {
  console.log(args);
}

foo(1, 2, 3, 4, 5)