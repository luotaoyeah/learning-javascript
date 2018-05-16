/*
 * 例子：函数管道；
 */
console.log("\n-------------------------------------------------- 01");
const double = x => x * 2;
const add = x => x + 1;

const pipe = (...functions) => {
  return input => {
    return [...functions].reduce((accumulator, fn) => {
      return fn(accumulator);
    }, input);
  };
};

/* 3 */
console.log(pipe(double, add)(1));
/* 4 */
console.log(pipe(add, double)(1));

export {};
