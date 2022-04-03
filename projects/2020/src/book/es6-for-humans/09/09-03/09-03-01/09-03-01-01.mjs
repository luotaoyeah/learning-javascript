/*
 * Promise
 *     Combining Promises with Promises.all()
 */

console.log('\n-------------------------------------------------- 01');
/*
 * Promise.all() 方法, 接收一个 promise 数组, 返回一个新的 promise 对象,
 * 当数组中所有的 promise 都 fulfilled 时, 该 promise 就会 fulfilled
 * 如果数组中某一个 promise 被 rejected 了, 该 promise 就会 rejected
 */

const p01 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('EXE FOO');
    resolve('FOO');
  }, 1000);
});

const p02 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('EXE BAR');
    resolve('BAR');
  }, 2000);
});

Promise.all([p01, p02]).then((v) => {
  /*
   * 返回结果为所有 promise 的结果组成的数组
   */
  console.log(v); // [ 'FOO', 'BAR' ]
});

export {};
