/*
 * Modules
 *     Importing
 */

console.log('\n-------------------------------------------------- 01');

/*
 * 使用 import 关键字引入其他 module 输出的数据,
 * from 后面表示 module 的路径
 */

import { name, age } from '../../05-04/05-04-01/05-04-01-04';

console.log(name);
console.log(age);

console.log('\n-------------------------------------------------- 02');
/*
 * 在当前 module 中, 不能再定义跟引入的标识同名的变量
 */

const name = 'bar'; // Identifier 'name' has already been declared
