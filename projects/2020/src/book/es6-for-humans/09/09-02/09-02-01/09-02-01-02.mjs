/*
 * Promise
 *     Creating a Promise
 */

console.log('\n-------------------------------------------------- 01');
/*
 * 可以使用 Promise.resolve() 方法创建一个立即 fulfill 的 promise
 * 或者使用 Promise.reject() 方法创建一个立即 reject 的 promise
 */

Promise.resolve().then((v) => {
  console.log(v); // undefined
});
Promise.resolve('FOO').then((v) => {
  console.log(v); // FOO
});
Promise.reject('BAR').catch((e) => {
  console.error(e); // BAR
});

export {};
