/*
 * 例子：统计元素出现的次数；
 */
console.log("\n-------------------------------------------------- 01");
/* { c: 2, b: 2, a: 1 } */
console.log(
  ["c", "b", "a", "b", "c"].reduce((accumulator, value) => {
    if (value in accumulator) {
      accumulator[value] += 1;
    } else {
      accumulator[value] = 1;
    }
    return accumulator;
  }, {})
);

export {};
