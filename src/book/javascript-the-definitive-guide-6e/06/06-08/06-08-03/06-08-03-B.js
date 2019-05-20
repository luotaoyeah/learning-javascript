/*
 * Object.preventExtensions()：
 *     将对象设置为 non-extensible 的；
 *
 * 对象的 extensible 设为 false 之后, 不能再重新设为 true；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = {};
/* true */
console.log(Object.isExtensible(obj01));
Object.preventExtensions(obj01);
/* false */
console.log(Object.isExtensible(obj01));

/*
 * Object.preventExtensions() 只能将对象的 extensible 设为 false,
 * 对象的 prototype 的 extensible 不受影响, 可以给其添加属性, 然后被对象继承；
 *
 */
console.log("\n-------------------------------------------------- 02");

const obj02 = {};
Object.preventExtensions(obj02);
Object.defineProperty(Object.getPrototypeOf(obj02), "x", {
  value: "x"
});
/* x */
console.log(obj02.x);

export {};
