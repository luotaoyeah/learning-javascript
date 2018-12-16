/*
 * Beyond ES6
 *     The includes method on Arrays
 */

console.log("\n-------------------------------------------------- 01");
/*
 * Array.prototype.includes() 方法，
 * 用来判断某个元素是否存在于数组中
 */

const arr01 = ["a", "b", "c"];
console.log(arr01.includes("b")); // true

/*
 * 在 ES2016 之前，可以使用 indexOf() 方法间接判断
 */
console.log(arr01.indexOf("b") > -1); // true

export {};
