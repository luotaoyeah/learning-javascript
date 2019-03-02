/*
 * Example: 数组元素去重;
 */
const array = [1, 2, 3, 2, 1];

console.log("\n-------------------------------------------------- 01");
console.log(
  array.sort().reduce((accumulator, value) => {
    if (accumulator[accumulator.length - 1] !== value) {
      accumulator.push(value);
    }
    return accumulator;
  }, [])
);

console.log("\n-------------------------------------------------- 02");
console.log(
  array.reduce((accumulator, value) => {
    if (!accumulator.includes(value)) {
      accumulator.push(value);
    }
    return accumulator;
  }, [])
);

export {};
