/*
 * 例子: 一个对象数组, 每个对象有一个数组属性, 提取该数组属性, 并合并成一个新的数组;
 */
console.log("\n-------------------------------------------------- 01");
const array = [
  {
    name: "tom",
    scores: [90, 100]
  },
  {
    name: "cat",
    scores: [99, 98, 95]
  }
];
console.log(
  array.reduce((accumulator, value) => [...accumulator, ...value.scores], [])
);

export {};
