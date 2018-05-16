/*
 * 使用 object literal 创建的对象的 prototype 为 Object.prototype;
 */
console.log("\n-------------------------------------------------- 01");
/* true */
console.log({}.__proto__ === Object.prototype);
/* true */
console.log({ name: "tom" }.__proto__ === Object.prototype);

export {};
