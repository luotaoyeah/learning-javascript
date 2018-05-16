/*
 * 如果'数组'为空，且无'初始值'，报错；
 */
console.log("\n-------------------------------------------------- 01");
/*
  /!* TypeError: Reduce of empty array with no initial value *!/
  [].reduce(() => {});
*/

/*
 * 如果'数组'为空，且有'初始值'，则直接返回'初始值'，不执行函数；
 * 如果'数组'只有一个元素，且无'初始值'，则直接返回第一个元素，不执行函数；
 */
console.log("\n-------------------------------------------------- 02");
/* foo */
console.log(
  [].reduce(() => {
    console.log("callback()");
  }, "foo")
);
/* foo */
console.log(
  ["foo"].reduce(() => {
    console.log("callback()");
  })
);

export {};
