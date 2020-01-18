/*
 * Promise
 *     Consuming a Promise with then() and catch()
 */

console.log('\n-------------------------------------------------- 01');
/*
 * 可以通过 then() 方法的第二个参数, 处理 rejected 状态
 */
Promise.reject('ERR01').then(
  () => {},
  (e) => {
    console.error(e);
  },
);

/*
 * 也可以直接通过 catch() 方法, 处理 rejected 状态
 */
Promise.reject('ERR02').catch((e) => {
  console.error(e);
});

/*
 * 当 then() 方法和 catch() 方法同时存在时,
 * 如果 then() 方法的第二个参数为 undefined,
 *     则会使用 catch() 方法来处理 rejected 状态
 * 否则会使用 then() 方法的第二个参数来处理
 *
 * 即：
 *     优先使用 then() 方法的第二个参数
 *     其次使用 catch() 方法
 */
Promise.reject('ERR03')
  .then(() => {})
  .catch((e) => {
    console.error(e); // ERR03
  });

Promise.reject('ERR04')
  .then(
    () => {},
    (e) => {
      console.error('THEN:' + e); // THEN:ERR04
    },
  )
  .catch((e) => {
    console.error('CATCH:' + e);
  });

export {};
