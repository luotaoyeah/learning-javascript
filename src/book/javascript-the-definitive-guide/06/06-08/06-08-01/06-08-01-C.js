/*
 * Object.prototype.isPrototypeOf()：
 *    判断一个对象是否在另一个对象的 prototype chain 上,
 *    即一个对象是否是另一个对象（或其 prototype, 其 prototype 的 prototype, ETC）的 prototype；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = {};
const obj02 = Object.create(obj01);

/* true */
console.log(obj01.isPrototypeOf(obj02));
/* true */
console.log(Object.prototype.isPrototypeOf(obj02));

/*
 * instanceof：
 *     可以用来判断一个对象是否是一个构造函数的实例；
 */
console.log("\n-------------------------------------------------- 01");

const obj03 = {};
const obj04 = Object.create(obj03);

/* true */
console.log(obj03.isPrototypeOf(obj04));
/* true */
console.log(obj04 instanceof obj03.constructor);
/* true */
console.log(obj04 instanceof Object.prototype.constructor);

export {};
