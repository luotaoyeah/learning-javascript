/*
 * Modules
 *     Importing
 *         Renaming Identifiers
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 在引入的时候, 也可以使用 as 给引入的 variable（function, class）起一个别名
 */

import { name as NAME, age as AGE } from "../../05-04/05-04-01/05-04-01-04";

console.log(NAME); // FOO
console.log(AGE); // 18

console.log("\n-------------------------------------------------- 02");
/*
 * 引入默认输出有三种方式：直接引入, 使用别名引入, 使用 namespace 引入
 */

import fn01 from "../../05-04/05-04-01/05-04-01-04";
import { default as fn02 } from "../../05-04/05-04-01/05-04-01-04";
import * as obj from "../../05-04/05-04-01/05-04-01-04";

fn01(); // DEFAULT
fn02(); // DEFAULT
obj.default(); // DEFAULT
