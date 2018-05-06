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
 * 普通模式：arguments 中的元素跟命名参数共享同一个值；
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
 * 普通模式：delete 一个非对象属性，不报错，返回 false；
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

/*
 * 严格模式：delete 一个 nonconfigurable 属性，报错；
 * 普通模式：delete 一个 nonconfigurable 属性，不报错，返回 false；
 */
console.log("\n-------------------------------------------------- 09");
(function() {
  "use strict";
  const obj01 = {};
  Object.defineProperty(obj01, "name", {
    value: "tom",
    configurable: false
  });

  /*
    /!* TypeError: Cannot delete property 'name' of #<Object> *!/
    console.log(delete obj01.name);
  */
})();

(function() {
  const obj01 = {};
  Object.defineProperty(obj01, "name", {
    value: "tom",
    configurable: false
  });

  /* false */
  console.log(delete obj01.name);
})();

/*
 * 严格模式：字面量对象定义同名属性,
 *   ES5：报错；
 *   ES6：不报错；
 * 普通模式：字面量对象定义同名属性，不报错；
 */
console.log("\n-------------------------------------------------- 10");
(function() {
  "use strict";

  const obj = {
    name: "tom",
    name: "cat"
  };

  console.log(obj.name);
})();

(function() {
  const obj = {
    name: "tom",
    name: "cat"
  };

  /* cat */
  console.log(obj.name);
})();

/*
 * 严格模式：函数参数同名，报错；
 * 普通模式：函数参数同名，不报错；
 */
console.log("\n-------------------------------------------------- 11");
(function() {
  "use strict";
  /*
    /!* SyntaxError: Duplicate parameter name not allowed in this context *!/
    (function(name, name) {
      "use strict";
      console.log(name);
    })();
  */
})();

(function(name, name) {
  /* cat */
  console.log(name);
})("tom", "cat");

/*
 * 严格模式：八进制整数必须以 0O 或 0o 开头，不能仅仅以 0 开头；
 * 普通模式：八进制整数可以以 0O 或 0o 或 0 开头；
 */
console.log("\n-------------------------------------------------- 12");
(function() {
  "use strict";
  const x = 0o7;
  /*
    /!* SyntaxError: Octal literals are not allowed in strict mode. *!/
    const y = 01;
  */
})();

(function() {
  const x = 0o7;
  const y = 07;
  console.log(x, y);
})();

/*
 * 严格模式：eval 和 arguments 被视为关键字，不能被赋值；
 * 普通模式：八进制整数可以以 0O 或 0o 或 0 开头；
 */
console.log("\n-------------------------------------------------- 13");
(function() {
  "use strict";
  /*
    /!* SyntaxError: Unexpected eval or arguments in strict mode *!/
    var eval = "tom";
    var arguments = "cat";
  */
})();

(function() {
  var eval = "tom";
  var arguments = "cat";
  /* tom cat */
  console.log(eval, arguments);
})();

/*
 * 严格模式：读取 arguments.caller 或 arguments.callee 报错；
 * 普通模式：读取 arguments.caller 或 arguments.callee 不会报错；
 */
console.log("\n-------------------------------------------------- 14");
(function() {
  "use strict";
  /*
    /!* Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them *!/
    console.log(arguments.caller);
    console.log(arguments.callee);
  */
})();

(function() {
  console.log(arguments.caller);
  console.log(arguments.callee);
})();
