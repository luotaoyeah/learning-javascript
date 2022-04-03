/*
 * Modules
 *     Importing
 */

console.log('\n-------------------------------------------------- 01');
/*
 * 多次引入同一个 module
 * 该 module 中的代码只会执行一次
 */
import { name } from '../../05-04/05-04-01/05-04-01-04';
console.log(name);

import { age } from '../../05-04/05-04-01/05-04-01-04';
console.log(age);
