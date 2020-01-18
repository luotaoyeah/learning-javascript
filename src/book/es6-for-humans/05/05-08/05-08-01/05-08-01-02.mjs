/*
 * Modules
 *     Common Pitfalls
 *         Read-Only Bindings
 */

console.log('\n-------------------------------------------------- 01');
/*
 * 通过 import 引入进来的数据是 readonly 的,
 * 在当前 module 中不能修改它们的值
 */

import { name, change } from './05-08-01-02-01';

console.log(name); // FOO

/*
 * 可以通过数据所在的 module 中的方法, 来修改数据的值
 */
change('BAR');
console.log(name); // BAR

/*
 * 在当前 module 不能修改引入的数据
 */
name = 'BAZ'; // TypeError: Assignment to constant variable.
