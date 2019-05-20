/*
 * Promise
 *     Creating a Promise
 *         Error Handling
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 当 then() 方法的第一个参数中抛出错误时,
 * then() 方法的第二个参数, 不能捕获到这种错误,
 * 而使用 catch() 方法, 则可以捕获到这种错误
 */

try {
  Promise.resolve().then(
    () => {
      throw new Error("ERR01");
    },
    e => {
      console.error(e.message);
    }
  );
} catch (e) {
  /*
   * then() 方法的第一个参数中抛出的错误,
   * 使用 try/catch 语句也不能捕获到
   */
}

Promise.resolve()
  .then(() => {
    throw new Error("ERR02");
  })
  .catch(e => {
    console.error(e.message); // ERR02
  });

export {};
