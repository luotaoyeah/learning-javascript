/*
 * 6.8 Object Attributes
 */

/*
 * 一个对象的 prototype 在对象创建的时候进行设置：
 *     使用 object literal 创建的对象的 prototype 为 Object.prototype；
 *     使用 new 创建的对象的 prototype 为其构造函数的 prototype 属性；
 *     使用 Object.create() 创建的对象的 prototype 为第一个参数；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = {};
/* true */
console.log(obj01.__proto__ === Object.prototype);

const obj02 = new Date();
/* true */
console.log(obj02.__proto__ === Date.prototype);

const obj03 = Object.create(obj01);
/* true */
console.log(obj03.__proto__ === obj01);

export {};
