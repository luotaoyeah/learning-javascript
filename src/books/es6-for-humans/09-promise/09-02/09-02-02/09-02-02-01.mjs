/*
 * Promise
 *     Consuming a Promise with then() and catch()
 */

console.log("\n-------------------------------------------------- 01");
/*
 * Promise.prototype.then() 方法可以传入两个回调函数，
 * 第一个函数会在 fulfilled 时执行，
 * 第二个函数会在 rejected 时执行
 */
Promise.resolve("FOO").then(
  v => {
    console.log(v); // FOO
  },
  e => {
    console.error(e);
  }
);

Promise.reject("ERR").then(
  v => {
    console.log(v);
  },
  e => {
    console.error(e); // ERR
  }
);

export {};
