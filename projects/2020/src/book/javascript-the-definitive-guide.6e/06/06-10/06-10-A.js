/*
 * 6.10 Object Methods
 */

/*
 * 除了显式创建的 prototype 为空的对象, JS 中所有的对象都继承了 Object.prototype ；
 */

/* Object.prototype 上有一些方法很有用：
 *     Object.prototype.hasOwnProperty()
 *     Object.prototype.propertyIsEnumerable()
 *     Object.prototype.isPrototypeOf()
 *
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = { x: "x" };
const obj02 = Object.create(obj01, {
  y: {
    value: "y"
  }
});
/* false */
console.log(obj02.hasOwnProperty("x"));
/* false */
console.log(obj02.propertyIsEnumerable("y"));
/* true */
console.log(obj01.isPrototypeOf(obj02));

export {};
