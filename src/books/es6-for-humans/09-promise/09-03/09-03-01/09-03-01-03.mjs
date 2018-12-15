/*
 * Promise
 *     Combining Promises with Promises.all()
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 如果 Promise.all() 的参数是一个空数组，则 Promise.all() 会立即被 fulfilled
 */

Promise.all([]).then(v => {
  console.log(v); // []
});

export {};
