/*
 * Promise
 *     Combining Promises with Promises.all()
 */

console.log('\n-------------------------------------------------- 01');
/*
 * 当 Promise.all() 的参数（promise 数组）中, 某一个 promise 被 rejected 时,
 * Promise.all() 返回的 promise 就会被 rejected
 * 此时, 其他处于 pending 状态的 promise 会继续执行,
 * 但是它们的结果不会影响 Promise.all() 的结果
 */

const p01 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('ERR01'));
  }, 1000);
});

const p02 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('EXE FOO');
    resolve('FOO');
  }, 2000);
});

Promise.all([p01, p02])
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.error(e.message);
  });

export {};
