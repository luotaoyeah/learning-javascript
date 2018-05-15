/*
 * 接收 2 个参数：'迭代函数'，'初始值'；
 * 迭代'数组'元素，返回累加结果；
 * --------------------------------------------------
 */

/*
 * 例子：有一个数组，元素都是对象，对象都有一个属性，该属性值是一个数组，
 *      提取每个对象的这个数组属性中的元素，并合并成一个新的数组；
 * --------------------------------------------------
 */
console.log("----------: 提取属性元素并合并成新的数组");
const array02 = [
  { name: "tom", scores: [90, 100] },
  { name: "cat", scores: [99, 98, 95] }
];
console.log(
  array02.reduce((accumulator, value) => [...accumulator, ...value.scores], [])
);

/*
 * 例子：数组元素去重；
 * --------------------------------------------------
 */
console.log("----------: 数组元素去重");
console.log(
  [1, 2, 3, 2, 1, 2, 3].sort().reduce((accumulator, value) => {
    if (
      accumulator.length === 0 ||
      accumulator[accumulator.length - 1] !== value
    ) {
      accumulator.push(value);
    }
    return accumulator;
  }, [])
);

/*
 * 例子：顺序执行多个 Promise；
 * --------------------------------------------------
 */
console.log("----------: 顺序执行多个 Promise");
const promise01 = () => new Promise(resolve => resolve(5));
const promise02 = x => new Promise(resolve => resolve(x * 2));
const promise03 = x => new Promise(resolve => resolve(x + 10));
[promise01, promise02, promise03]
  .reduce((promiseChain, promiseFactory) => {
    return promiseChain.then(result => {
      return promiseFactory(result).then(res => res);
    });
  }, Promise.resolve())
  .then(result => {
    console.log(result);
  });

/*
 * 例子：函数管道；
 * --------------------------------------------------
 */
console.log("----------: 函数管道");
const double = x => x * 2;
const add = x => x + 1;

const pipe = (...functions) => input =>
  [...functions].reduce((acc, fn) => fn(acc), input);

/* 3 */
console.log(pipe(double, add)(1));
/* 4 */
console.log(pipe(add, double)(1));
