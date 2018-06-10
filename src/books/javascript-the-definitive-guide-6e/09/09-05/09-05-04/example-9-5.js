/*
 * Example 9-5. A function for duck-type checking
 */

(function() {
  /*
   * 检查 obj 是否属于某个 duck-type；从第二个参数开始：
   *     如果参数是 string，检查 obj 是否有名称为该参数的方法；
   *     如果参数是 object，检查 obj 是否有跟该 object 的所有方法；
   *     如果参数是 function，检查 obj 是否有跟该 function 的 prototype 属性对象的所有方法；
   */
  console.log("\n-------------------------------------------------- 01");

  function quacks(obj) {
    for (var i = 1; i < arguments.length; i++) {
      var arg = arguments[i];

      switch (typeof arg) {
        case "string":
          if (typeof obj[arg] !== "function") {
            return false;
          }
          continue;
        case "function":
          arg = arg.prototype;
        case "object":
          for (var j in arg) {
            if (typeof arg[j] !== "function") {
              continue;
            }
            if (typeof obj[j] !== "function") {
              return false;
            }
          }
      }

      return true;
    }
  }

  const obj01 = { walk() {} };
  const obj02 = { swim() {} };
  const obj03 = { swim() {}, walk() {} };

  /* true */
  console.log(quacks(obj03, obj01, obj02));
})();
