// Promise 基本实例

const promise = new Promise((resolve, reject) => {

  // 这里用于“兑现”承诺
  // resolve(100);

  // “承若”失败
  reject(new Error('Promise rejected'));
});

promise.then(
  (value) => console.log('resolve', value),
  (error) => console.log('reject', error),
);

console.log('END');
