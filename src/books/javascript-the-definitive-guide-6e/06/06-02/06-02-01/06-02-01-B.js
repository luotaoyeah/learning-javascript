/*
 * 在有些情况下，只能使用 [] 方式，不能使用 . 方式；
 */
console.log("\n-------------------------------------------------- 01");

const array = ["foo", "bar"];
const obj = {};

for (let i = 0; i < array.length; i++) {
  obj[i] = array[i];
}

/* { '0': 'foo', '1': 'bar' } */
console.log(obj);

export {};
