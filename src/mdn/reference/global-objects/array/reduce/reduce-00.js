/*
 * 接收 2 个参数：'迭代函数'，'初始值'；
 * 迭代'数组'元素，返回累加结果；
 */

console.log("\n-------------------------------------------------- 01");
const array = [1, 2, 3, 4];

const reducer = (accumulator, value, index, array) => {
  return accumulator + value;
};

/* 10 */
console.log(array.reduce(reducer));
/* 15 */
console.log(array.reduce(reducer, 5));

export {};
