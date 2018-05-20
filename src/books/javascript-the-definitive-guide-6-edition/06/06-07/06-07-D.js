/*
 * 使用 Object.defineProperty() 添加属性时，
 * property descriptor 对象中省略的属性，其值为默认的 undefined 或者 false；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = {};
Object.defineProperty(obj01, "x", { writable: true });
/* { value: undefined, writable: true, enumerable: false, configurable: false } */
console.log(Object.getOwnPropertyDescriptor(obj01, "x"));

/*
 * 使用 Object.defineProperty() 设置属性的 property descriptor 对象时，
 * property descriptor 对象中省略的属性保持不变；
 */
console.log("\n-------------------------------------------------- 01");

const obj02 = { x: 1 };
/* { value: 1, writable: true, enumerable: true, configurable: true } */
console.log(Object.getOwnPropertyDescriptor(obj02, "x"));
Object.defineProperty(obj02, "x", { configurable: false });
/* { value: 1, writable: true, enumerable: true, configurable: false } */
console.log(Object.getOwnPropertyDescriptor(obj02, "x"));

export {};
