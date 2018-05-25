/*
 * 如果一个 data property 是 non-configurable 的，
 * 则不能将它的 writable 从 false 修改为 true，但是可以从 true 修改为 false；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = Object.create(
  {},
  {
    x: {
      enumerable: true,
      configurable: false
    }
  }
);

/*
  /!* TypeError: Cannot redefine property: x *!/
  Object.defineProperty(obj01, "x", {
    writable: true
  });
*/

const obj02 = Object.create(
  {},
  {
    x: {
      writable: true,
      enumerable: true,
      configurable: false
    }
  }
);

Object.defineProperty(obj02, "x", {
  writable: false
});

export {};
