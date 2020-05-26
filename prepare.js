const str = `Hello ES2015, 
this is a \`string.\``;
console.log(str);

const name = 'Darwin';
const msg = `Hey, ${name} —— ${1 + 2} —— ${Math.random()}`;
console.log(msg);


// 带标签的模板字符串
console.log`Hello World`;


const _name = 'Turing';
const _gender = true;

function myTagFunc(strings, name, gender) {
  /* console.log(strings, name, gender);
  return 'VALUE'; */
  const sex = gender ? 'man': 'woman';
  return strings[0] + name + strings[1] + sex + strings[2];
}

const result = myTagFunc`Hey, ${_name} is a ${_gender}.`;
console.log(result);
