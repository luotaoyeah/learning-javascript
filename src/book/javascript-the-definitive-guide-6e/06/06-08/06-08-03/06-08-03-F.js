/*
 * Object.isFrozen()：
 *     判断对象是否处于 frozen 状态；
 */
console.log("\n-------------------------------------------------- 01");
const obj01 = {};
/* false */
console.log(Object.isFrozen(obj01));
Object.freeze(obj01);
/* true */
console.log(Object.isFrozen(obj01));

/*
 * 可以手动设置对象的特性, 使对象处于 frozen 状态；
 */
console.log("\n-------------------------------------------------- 01");
const obj02 = { x: "x" };
/* false */
console.log(Object.isFrozen(obj02));

Object.preventExtensions(obj02);
Object.defineProperty(obj02, "x", {
  configurable: false,
  writable: false
});
/* true */
console.log(Object.isFrozen(obj02));

export {};
