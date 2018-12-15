/*
 * Promise
 *     Combining Promises with Promises.all()
 *         Promise.race()
 */

console.log("\n-------------------------------------------------- 01");
/*
 * Promise.race() 接收一个 promise 数组，返回一个新的 promise 对象，
 * 只要数组中某一个 promise 被 fulfilled 时，返回的 promise 就会 fulfilled
 * 而不像 Promis.all() 需要等所有 promise 都 fulfilled
 * 其他 pending 状态的 promise 会继续执行，但是它们的结果不影响最终结果
 */

const p01 = new Promise(resolve => {
  setTimeout(() => {
    resolve("FOO");
  }, 1000);
});

const p02 = new Promise(resolve => {
  setTimeout(() => {
    console.log("EXE BAR");
    resolve("BAR");
  }, 2000);
});

Promise.race([p01, p02]).then(v => {
  /*
   * 返回的是最先被 fulfilled 的 promise 的结果
   */
  console.log(v); // FOO
});

export {};
