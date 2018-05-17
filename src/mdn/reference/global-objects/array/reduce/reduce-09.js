/*
 * Example: 顺序执行多个 promise;
 */
console.log("\n-------------------------------------------------- 01");
const promise01 = () => new Promise(resolve => resolve(5));
const promise02 = x => new Promise(resolve => resolve(x * 2));
const promise03 = x => new Promise(resolve => resolve(x + 10));

[promise01, promise02, promise03]
  .reduce((accumulator, value) => {
    return accumulator.then(result => {
      return value(result).then(res => res);
    });
  }, Promise.resolve())
  .then(result => {
    console.log(result);
  });

export {};
