/*
 * Promise
 *     Creating a Promise
 *         Error Handling
 */

console.log('\n-------------------------------------------------- 01');
/*
 * 处理 rejected 状态有两种方式：
 *     1. 使用 then() 方法的第二个参数
 *     2. 使用 catch() 方法
 * 这两种方式都可以捕获 promise 中抛出的错误
 */

new Promise(() => {
  throw new Error('FOO');
}).then(
  () => {},
  (e) => {
    console.error(e.message);
  },
);

new Promise(() => {
  throw new Error('BAR');
})
  .then(() => {})
  .catch((e) => {
    console.error(e.message);
  });

export {};
