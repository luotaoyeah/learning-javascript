/*
 * 从 Object.prototype 继承的 toString() 方法，
 * 默认返回的是类似 [object Class] 的字符串，
 * 其中 Class 表示对象的类型；
 */
console.log("\n-------------------------------------------------- 01");
function Foo() {}
/* [object Object] */
console.log(new Foo().toString());

/*
 * 对 null 和 undefined 调用 toString() 方法，
 * 返回的类型分别是 Null 和 Undefined；
 */
console.log("\n-------------------------------------------------- 02");
/* [object Null] */
console.log(Object.prototype.toString.call(null));
/* [object Undefined] */
console.log(Object.prototype.toString.call(undefined));

export {};
