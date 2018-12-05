/*
 * Modules
 *     Common Pitfalls
 *         Destructing an Import Statement and Using Variables
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 虽然 import 的语法看起来像是一个 destructure，但它不是，
 * 在 import 语句中不能使用 destructure
 * 下面的语法是错误的
 */

// import { { name } } from "./05-08-01-03-01";

console.log("\n-------------------------------------------------- 02");
/*
 * 因为 import 和 export 语句是完全静态的，
 * 因此模块的路径在 compile 时期就必须能够确定，
 * 下面的语法是错误的
 */

// import obj from "./05-08-01-03-" + 01;
