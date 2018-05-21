/*
 * 获取对象的 prototype，①
 *     Object.getPrototypeOf()：
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = {};
/* true */
console.log(Object.getPrototypeOf(obj01) === Object.prototype);

const obj02 = new Date();
/* true */
console.log(Object.getPrototypeOf(obj02) === Date.prototype);

const obj03 = Object.create(obj01);
/* true */
console.log(Object.getPrototypeOf(obj03) === obj01);

/*
 * 获取对象的 prototype，②：
 *     使用 new 创建的对象有一个 constructor 属性，指向其构造函数，
 *     因为使用 new 创建的对象的 prototype 为其构造函数的 prototype 属性，
 *     因此可以使用 obj.constructor.prototype 获取对象的 prototpye；
 *
 * 这种方式不完全可靠；
 */
console.log("\n-------------------------------------------------- 02");

const obj04 = new String();
/* true */
console.log(obj04.constructor.prototype === Object.getPrototypeOf(obj04));

/*
 * 获取对象的 prototype，③：
 *     使用 object literal 创建的对象的 constructor 属性为 Object() 构造函数，
 *     因此可以使用 obj.constructor.prototype 获取对象的 prototype；
 */
console.log("\n-------------------------------------------------- 03");

const obj05 = {};
/* true */
console.log(obj05.constructor === Object);

/*
 * 获取对象的 prototype，④：
 *     使用 Object.create() 创建的对象的 constructor 属性为 Object() 构造函数，
 *     但是对象的 prototype 为第一个参数，
 *     因此不能使用 obj.constructor.prototype 获取对象的 prototype；
 */
console.log("\n-------------------------------------------------- 04");

const obj06 = Object.create(obj05);
/* true */
console.log(obj06.constructor === Object);
/* false */
console.log(obj06.constructor.prototype === Object.getPrototypeOf(obj06));

export {};
