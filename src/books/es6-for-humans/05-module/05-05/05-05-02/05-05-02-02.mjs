/*
 * Modules
 *     Importing
 *         Importing Default Values
 */

console.log("\n-------------------------------------------------- 01");
/*
 * default import 和 named import 可以同时使用
 */
import fn, { name } from "../../05-04/05-04-01/05-04-01-04";

console.log(name); // FOO
fn(); // DEFAULT

console.log("\n-------------------------------------------------- 02");
/*
 * default import 和 namespace import 可以同时使用
 */
import fn02, * as obj from "../../05-04/05-04-01/05-04-01-04";

console.log(obj.name); // FOO
fn02(); // DEFAULT
