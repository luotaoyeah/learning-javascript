/*
 * Promise
 *     Creating a Promise
 *         Chaining of Promises
 */

console.log('\n-------------------------------------------------- 01');
/*
 * Promise.prototype.then() 和 Promise.prototype.catch() 的返回值依然是一个 promise 对象,
 * 因此, 多个 then() 和 catch() 可以链式调用,
 * 上一个 then() 中返回的数据会作为下一个 then() 中函数的参数
 */
Promise.resolve('A')
  .then((v) => {
    return v + 'B';
  })
  .then((v) => {
    return v + 'C';
  })
  .then((v) => {
    console.log(v); // ABC
  });

export {};
