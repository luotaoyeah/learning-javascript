/*
 * Modules
 *     Importing
 *         *
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 可以使用 * 将整个 module 引入到一个对象（或者叫做 namespace），
 * 然后通过这个对象，访问该 module 所有输出的数据
 */

import * as obj from "../../05-04/05-04-01/05-04-01-04";

console.log(obj.name);
console.log(obj.age);
/* 使用 default 访问该 module 的默认输出 */
obj.default();
