/*
 * 合并数组使用 shadow copy, 即:
 *     如果元素是对象, 则复制对象引用;
 *     如果元素不是对象(number, string, boolean), 则复制元素本身;
 */

console.log("\n-------------------------------------------------- 01");
const obj01 = {
  name: "tom",
  age: 18
};
const array01 = [obj01];
const array02 = array01.concat(["a"]);

/* tom */
console.log(array01[0].name);
/* tom */
console.log(array02[0].name);

obj01.name = "cat";
/* cat */
console.log(array01[0].name);
/* cat */
console.log(array02[0].name);
export {};
