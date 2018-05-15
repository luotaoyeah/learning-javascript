/*
 * 指定'初始值'能使程序更加健壮，否则可能会返回不同类型的结果；
 */
console.log("\n-------------------------------------------------- 01");
const reducer01 = (accumulator, value) => {
  return Math.max(accumulator.x, value.x);
};
/* 2 */
console.log([{ x: 1 }, { x: 2 }].reduce(reducer01));
/* { x: 1 } */
console.log([{ x: 1 }].reduce(reducer01));
/* TypeError: Reduce of empty array with no initial value */
[].reduce(reducer01);
