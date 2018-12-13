/*
 * Promise
 *     Creating a Promise
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 使用 Promise() 构造函数创建 promise 对象
 */

const promise = new Promise((resolve, reject) => {
  /*
   * resolve 函数用来将状态变为 fulfilled
   * reject 函数用来将状态变为 rejected
   */
  setTimeout(() => {
    resolve("SUCCESS");
  }, 1000);

  if (Math.random() < 0.5) {
    reject(new Error("ERR"));
  }
});

export {};
