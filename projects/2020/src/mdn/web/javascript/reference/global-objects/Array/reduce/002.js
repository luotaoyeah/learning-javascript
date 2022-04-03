/*
 * 若无'初始值', 则'数组'的第一个元素作为'初始值', 且从'数组'第二个元素开始迭代;
 */
console.log('\n-------------------------------------------------- 01');
const array01 = [3, 2, 1];
/* 3-2-1 */
console.log(
  array01.reduce((accumulator, value, index, array) => {
    console.log('index:', index);
    return `${accumulator}-${value}`;
  }),
);

console.log('\n-------------------------------------------------- 02');
/* 5-3-2-1 */
console.log(
  array01.reduce((accumulator, value, index, array) => {
    console.log('index:', index);
    return `${accumulator}-${value}`;
  }, 5),
);

export {};
