/*
 * 接收 2 个参数：'迭代函数'，'初始值'；
 * 迭代'数组'元素，返回累加结果；
 * --------------------------------------------------
 */

/*
 * 如果没有提供'初始值'，则'初始值'为'数组'的第一个元素，且从'数组'第二个元素开始迭代；
 * --------------------------------------------------
 */
console.log("----------: 无初始值");
const array01 = [3, 2, 1];
/* 3-2-1 */
console.log(
  array01.reduce((accumulator, value, index, array) => {
    console.log("index:", index);
    return `${accumulator}-${value}`;
  })
);
console.log("----------: 有初始值");
/* 5-3-2-1 */
console.log(
  array01.reduce((accumulator, value, index) => {
    console.log("index:", index);
    return `${accumulator}-${value}`;
  }, 5)
);

/*
 * 如果'数组'为空，且无'初始值'，报错；
 * --------------------------------------------------
 */
console.log("----------: 如果'数组'为空，且无'初始值'，报错");
/*
  /!* TypeError: Reduce of empty array with no initial value *!/
  [].reduce(() => {});
*/

/*
 * 如果'数组'为空，且有'初始值'，
 * 或者'数组'只有一个元素，且无'初始值'，
 * 则直接返回'初始值'或者第一个元素，不执行'迭代函数'；
 * --------------------------------------------------
 */
console.log("----------: 直接返回，不执行'迭代函数'");
console.log(
  [].reduce(() => {
    console.log("callback()");
  }, "tom")
);
console.log(
  ["tom"].reduce(() => {
    console.log("callback()");
  })
);

/*
 * 提供'初始值'能使程序更加健壮；
 * 否则可能会返回不同类型的结果；
 * --------------------------------------------------
 */
console.log("----------: 应该提供'初始值'");
const reducer01 = (accumulator, value) => {
  return Math.max(accumulator.x, value.x);
};
/* 2 */
console.log([{ x: 1 }, { x: 2 }].reduce(reducer01));
/* { x: 1 } */
console.log([{ x: 1 }].reduce(reducer01));
/*
  /!* TypeError: Reduce of empty array with no initial value *!/
  [].reduce(reducer01);
*/

/*
 * 例子：数组元素求和；
 * --------------------------------------------------
 */
console.log("----------: 数组元素求和");
console.log([1, 2, 3].reduce((accumulator, value) => accumulator + value, 0));

/*
 * 例子：平化数组；
 * --------------------------------------------------
 */
console.log("----------: 平化数组");
console.log(
  [[1, 2], [3, 4]].reduce((accumulator, value) => accumulator.concat(value), [])
);

/*
 * 例子：统计元素出现次数；
 * --------------------------------------------------
 */
console.log("----------: 统计相同元素数量");
console.log(
  ["a", "c", "b", "b", "a", "a"].reduce((accumulator, value) => {
    if (value in accumulator) {
      accumulator[value] += 1;
    } else {
      accumulator[value] = 1;
    }
    return accumulator;
  }, {})
);

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
