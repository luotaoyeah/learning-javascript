/*
 * 6.10.2 The toLocaleString() Method
 */

/*
 * Object.prototype.toLocaleString()：
 *     用于返回本地化的字符串, 默认为直接调用 toString() 方法；
 */
console.log("\n-------------------------------------------------- 01");
/* [object Object] */
console.log({}.toString());
/* [object Object] */
console.log({}.toLocaleString());

/*
 * Date 实现了自定义的 toLocaleString() 方法：
 */
console.log("\n-------------------------------------------------- 02");
/* Thu May 24 2018 22:03:56 GMT+0800 (CST) */
console.log(new Date().toString());
/* 2018-5-24 22:03:56 */
console.log(new Date().toLocaleString());

/*
 * Number 实现了自定义的 toLocaleString() 方法：
 */
console.log("\n-------------------------------------------------- 03");
/* 1000000 */
console.log(Number(1000000).toString());
/* 1,000,000 */
console.log(Number(1000000).toLocaleString());

/*
 * Array 实现了自定义的 toLocaleString() 方法, 会调用每个元素的 toLocaleString() 方法；
 */
console.log("\n-------------------------------------------------- 04");
/* 1000,1000000 */
console.log([1000, 1000000].toString());
/* 1,000,1,000,000 */
console.log([1000, 1000000].toLocaleString());

export {};
