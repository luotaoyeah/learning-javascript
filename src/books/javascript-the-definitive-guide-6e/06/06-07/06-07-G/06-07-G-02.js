/*
 * 如果一个属性是 non-configurable 的，
 *     则不能修改它的 configurable 和 enumerable 特性；
 *     不能 delete 该属性；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = Object.defineProperties(
  {},
  {
    x: {
      value: 1,
      writable: true,
      enumerable: true,
      configurable: false
    }
  }
);

/*
  /!* TypeError: Cannot redefine property: x *!/
  Object.defineProperty(obj01, "x", { configurable: true });
*/

/*
  /!* TypeError: Cannot redefine property: x *!/
  Object.defineProperty(obj01, "x", { enumerable: false });
*/

/*
  /!* TypeError: Cannot delete property 'x' of #<Object> *!/
  delete obj01.x;
*/

export {};
