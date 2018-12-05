/*
 * Modules
 *     Common Pitfalls
 *         Using eval()
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 在 eval() 中，不能使用 import 和 export
 */

eval("import { name } from './05-08-01-02-01'; console.log(name);"); // SyntaxError: Unexpected token {
