/*
 * associative array 跟 for/in 一起使用；
 */
console.log("\n-------------------------------------------------- 01");

const obj = {
  x: 1,
  y: 2,
  z: 3
};

let total = 0;
for (let key in obj) {
  total += obj[key];
}
/* 6 */
console.log(total);

export {};
