/*
 * "use strict" 指令只能放在文件或者函数的最开始，在所有真正的语句之前；
 * 否则将当成普通的字符串，被忽略；
 */
console.log("\n-------------------------------------------------- 01");

(function() {
  "use strict";
  /*
    /!* ReferenceError: name is not defined *!/
    name = "tom";
  */
})();

(function() {
  console.log();
  ("use strict");

  name = "tom";
  console.log(name);
})();

/*
 * 严格模式：不能使用 with 语句；
 */
console.log("\n-------------------------------------------------- 02");

(function() {
  const obj01 = { name: "tom" };
  with (obj01) {
    console.log(name);
  }
})();

(function() {
  "use strict";

  const obj01 = { name: "tom" };
  /*
    /!* error *!/
    with (obj01) {
      console.log(name);
    }
  */
})();

/*
 * 严格模式：所有变量必须声明；
 * 普通模式：可以隐式声明全局变量；
 */
console.log("\n-------------------------------------------------- 03");

(function() {
  "use strict";
  /*
    /!* ReferenceError: age is not defined *!/
    age = 18;
  */
})();

(function() {
  age = 18;
})();

/*
 * 严格模式：函数调用中的 this 为 undefined；
 * 普通模式：函数调用中的 this 为全局对象；
 */
console.log("\n-------------------------------------------------- 04");

(function() {
  "use strict";
  console.log("this === undefined:", this === undefined);
})();

(function() {
  console.log("this === undefined:", this === undefined);
})();

/*
 * 严格模式：使用 call 或 apply 调用函数，this 为第一个参数；
 * 普通模式：使用 call 或 apply 调用函数，this 为第一个参数，
 *   如果第一个参数为 null 或 undefined，则参数会被替换为全局对象；
 *   如果第一个参数不是对象，会被转换为对象；
 */
console.log("\n-------------------------------------------------- 05");

(function() {
  "use strict";
  console.log("this === undefined:", this === undefined);
}.call(undefined));

(function() {
  console.log("this === undefined:", this === undefined);
}.call(undefined));
