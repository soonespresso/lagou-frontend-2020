
var elements = [{}, {}, {}]
for (let i = 0; i < elements.length; i++) {
  elements[i].onclick = function () {
    console.log(i);
  };
}
elements[2].onclick(); // 1

for (let i = 0; i < 3; i++) {
  let i = 'foo'
  console.log(i)
}


for (;;) {
  let i = 0;
  if (i < 3) {
    let i = 'foo';
    console.log(i);
  }
  i++;
}


