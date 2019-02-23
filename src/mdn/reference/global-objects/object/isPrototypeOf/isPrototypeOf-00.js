/*
 * Object.prototype.isPrototypeOf()：
 *     判断'对象A'是否在'对象B'的 prototype chain 上；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = {};
const obj02 = Object.create(obj01);

/* true */
console.log(obj01.isPrototypeOf(obj02));
/* true */
console.log(Object.prototype.isPrototypeOf(obj02));

console.log("\n-------------------------------------------------- 02");

function Obj01() {}

function Obj02() {}

Obj02.prototype = Object.create(Obj01.prototype);
const obj03 = new Obj02();

/* true */
console.log(Obj01.prototype.isPrototypeOf(obj03));
/* true */
console.log(Obj02.prototype.isPrototypeOf(obj03));

export {};
