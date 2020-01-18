/*
 * Modules
 *     Importing
 *         Importing Default Values
 */

console.log('\n-------------------------------------------------- 01');
/*
 * 如何引入默认输出
 */

import fn01 from '../../05-04/05-04-01/05-04-01-04';

fn01(); // DEFAULT

console.log('\n-------------------------------------------------- 02');
/*
 * 引入默认输出和使用 * 引入 namespace 的区别
 */

import * as fn02 from '../../05-04/05-04-01/05-04-01-04';

fn02.default(); // DEFAULT
console.log(fn01); // [Function: default]
console.log(fn02); // [Module] { age: 18, default: [Function: default], name: 'FOO' }
