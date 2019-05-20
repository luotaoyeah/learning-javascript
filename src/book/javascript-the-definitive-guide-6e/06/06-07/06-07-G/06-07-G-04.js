/*
 * 如果一个 data property 是 non-configurable 的, 则不能将它修改为 accessor property；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = Object.create(
  {},
  {
    x: {
      value: 1,
      writable: true,
      enumerable: true
    }
  }
);

/*
  /!* TypeError: Cannot redefine property: x *!/
  Object.defineProperty(obj01, "x", {
    get() {
      return 0;
    }
  });
*/

export {};
