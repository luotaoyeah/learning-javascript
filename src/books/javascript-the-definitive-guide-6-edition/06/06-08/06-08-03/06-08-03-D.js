/*
 * Object.isSealed()：
 *     判断对象是否处于 seal 状态；
 *
 * 处于 seal 状态的对象满足两个条件：
 *     a. 对象是 non-extensible 的；
 *     b. 对象的 own properties 是 non-configurable 的；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = {};
/* false */
console.log(Object.isSealed(obj01));
Object.seal(obj01);
/* true */
console.log(Object.isSealed(obj01));

/*
 * 可以手动将对象设置为 non-extensible 的，且将对象的 own properties 设置为 non-configurable 的，
 * 使对象处于 seal 状态；
 */
console.log("\n-------------------------------------------------- 02");

const obj02 = { x: "x" };
/* false */
console.log(Object.isSealed(obj02));
Object.preventExtensions(obj02);
Object.defineProperty(obj02, "x", {
  configurable: false
});
/* true */
console.log(Object.isSealed(obj02));

export {};
