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

/*
 * 严格模式：给 nonwritable 属性赋值，给 nonextensible 对象添加属性，都会报错；
 * 普通模式：给 nonwritable 属性赋值，给 nonextensible 对象添加属性，直接无效，不会报错；
 */
console.log("\n-------------------------------------------------- 06");

(function() {
  "use strict";
  const obj01 = {};
  Object.defineProperty(obj01, "name", {
    value: "tom",
    writable: false
  });
  Object.freeze(obj01);

  /*
    /!* TypeError: Cannot assign to read only property 'name' of object '#<Object>' *!/
    obj01.name = "cat";
  */

  /*
    /!* TypeError: Cannot add property age, object is not extensible *!/
    obj01.age = 18;
  */
})();

(function() {
  const obj01 = {};
  Object.defineProperty(obj01, "name", {
    value: "tom",
    writable: false
  });
  Object.freeze(obj01);

  obj01.name = "cat";
  /* tom */
  console.log(obj01.name);

  obj01.age = 18;
  /* undefined */
  console.log(obj01.age);
})();

/*
 * 严格模式：arguments 中的元素是命名参数的复制；
 * 普通模式，arguments 中的元素跟命名参数共享同一个值；
 */
console.log("\n-------------------------------------------------- 07");
(function(name) {
  "use strict";
  arguments[0] = "cat";
  /* tom */
  console.log(name);
})("tom");

(function(name) {
  arguments[0] = "cat";
  /* cat */
  console.log(name);
})("tom");

/*
 * 严格模式：delete 一个非对象属性，报错；
 * 普通模式，delete 一个非对象属性，不报错，返回 false；
 */
console.log("\n-------------------------------------------------- 08");
(function() {
  "use strict";
  var name = "tom";
  /*
    /!* SyntaxError *!/
    console.log(delete name);
  */
})();

(function() {
  var name = "tom";
  /* false */
  console.log(delete name);
})();
