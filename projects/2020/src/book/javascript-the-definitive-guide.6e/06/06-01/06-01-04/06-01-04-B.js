/*
 * 如果参数为 null, 则对象的 prototype 对象为空, 不继承任何属性或方法；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = Object.create(null);
/* undefined */
console.log(obj01.__proto__);

export {};
