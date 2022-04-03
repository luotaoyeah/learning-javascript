/*
 * 如果一个 accessor property 是 non-configurable 的,
 *     则不能修改它的 getter 或 setter；
 *     不能将它修改为 data property；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = Object.defineProperties(
  {},
  {
    x: {
      get() {
        return 1;
      },
      enumerable: true
    }
  }
);

/*
  /!* TypeError: Cannot redefine property: x *!/
  Object.defineProperty(obj01, "x", {
    set() {
      /!*  *!/
    }
  });
*/

/*
  /!* TypeError: Cannot redefine property: x *!/
  Object.defineProperty(obj01, "x", {
    get() {
      return 2;
    }
  });
*/

/*
  /!* TypeError: Cannot redefine property: x *!/
  Object.defineProperty(obj01, "x", {
    value: 0
  });
*/

export {};
