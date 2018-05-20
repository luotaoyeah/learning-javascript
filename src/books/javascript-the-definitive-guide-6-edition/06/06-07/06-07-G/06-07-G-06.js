/*
 * 如果一个 data property 是 non-configurable 且 non-writable 的，则不能修改属性的值；
 * 因为如果属性是 non-writable 但是 configurable 的，可以先修改为 writable 的，
 * 然后修改属性值，再修改为 non-writable 的；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = Object.create(
  {},
  {
    x: {
      value: 1,
      writable: false,
      configurable: true
    }
  }
);

Object.defineProperty(obj01, "x", {
  value: 2
});

/* 2 */
console.log(obj01.x);

export {};
