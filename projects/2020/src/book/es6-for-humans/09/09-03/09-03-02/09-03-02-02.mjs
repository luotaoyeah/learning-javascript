/*
 * Promise
 *     Combining Promises with Promises.all()
 *         Promise.race()
 */

console.log('\n-------------------------------------------------- 01');
/*
 * 只要参数数组中某个 promise 被 resolve, 不管是 fulfilled 还是 rejected
 * 返回的 promise 就会相应的被 resolve
 * 即：
 *     Promise.race() 返回的 promise 的状态,
 *     依赖于参数数组中第一个被 resolve 的 promise 的状态
 */

const p01 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('FOO');
  }, 1000);
});

const p02 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('EXE BAR');
    reject('BAR');
  }, 2000);
});

Promise.race([p01, p02])
  .then((v) => {
    console.log(v); // FOO
  })
  .catch((e) => {
    console.error(e.message);
  });

export {};
