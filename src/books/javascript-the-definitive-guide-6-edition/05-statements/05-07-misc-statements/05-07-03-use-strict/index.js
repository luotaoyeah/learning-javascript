/*
 * "use strict" 只能放在文件或者函数的最开始，在所有真正的语句之前；
 * 否则将当成普通的字符串，被忽略；
 */

console.log("\n-------------------------------------------------- 01");

function f01() {
  /* 有效 */
  "use strict";
  name = "tom";
  console.log(name);
}

function f02() {
  console.log("f02");
  /* 无效 */
  ("use strict");
  name = "tom";
  console.log(name);
}

/*
 * 如果先执行 f01 会报错，因为 f01 启用了严格模式，不能声明隐式的全局变量；
 * 如果先执行 f02 不会报错，因为 f02 未启用严格模式，成功声明了全局变量 name；
 */
f02();
f01();
