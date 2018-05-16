/*
 * 内置的 Constructor 的 prototype 都为 Object.prototype;
 */
console.log("\n-------------------------------------------------- 01");
/* true */
console.log(Date.prototype.__proto__ === Object.prototype);
console.log(RegExp.prototype.__proto__ === Object.prototype);
console.log(Array.prototype.__proto__ === Object.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Boolean.prototype.__proto__ === Object.prototype);
console.log(String.prototype.__proto__ === Object.prototype);

export {};
