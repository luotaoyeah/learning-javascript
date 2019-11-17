/*
 * Object.getPrototypeOf()：
 *     获取对象的 prototype；
 */
console.log('\n-------------------------------------------------- 01');

const obj01 = {};
const obj012 = Object.create(obj01);
/* true */
console.log(Object.getPrototypeOf(obj012) === obj01);

export {};
