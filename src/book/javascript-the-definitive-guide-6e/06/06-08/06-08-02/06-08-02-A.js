/*
 * 6.8.2 The class Attribute
 */

/*
 * 对象的 class 特性是一个字符串, 表示对象的类型；
 * 该特性不能设值, 且只能通过 toString() 方法间接获取；
 *     对象的 toString() 方法继承自 Object.prototype,
 *     该方法默认的行为是打印字符串：[object class],
 *     其中 class 就表示该对象的 class 特性；
 *
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = {};
/* [object Object] */
console.log(obj01.toString());

export {};
