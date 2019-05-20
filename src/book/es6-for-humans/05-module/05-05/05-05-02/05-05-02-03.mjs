/*
 * Modules
 *     Importing
 *         Importing Default Values
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 可以使用 default 加上 named import 的形式引入默认输出,
 * 同时给它起个别名
 */
import { default as fn, name } from "../../05-04/05-04-01/05-04-01-04";

console.log(name); // FOO
fn(); // DEFAULT
