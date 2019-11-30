/*
 * 使用 new 创建的对象的 prototype 为其 Constructor 的 prototpye 属性;
 */
console.log("\n-------------------------------------------------- 01");
/* true */
console.log(new Object().__proto__ === Object.prototype);
/* true */
console.log(new Date().__proto__ === Date.prototype);
/* true */
console.log(new RegExp("js").__proto__ === RegExp.prototype);

export {};
