/*
 * Modules
 *     Importing
 *         Exporting an Imported Binding
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 引入的数据可以再次输出
 */

import { name } from "../../05-04/05-04-01/05-04-01-04";

export { name };

console.log("\n-------------------------------------------------- 02");
/*
 * 可以在引入的同时输出
 */

export { age } from "../../05-04/05-04-01/05-04-01-04";
