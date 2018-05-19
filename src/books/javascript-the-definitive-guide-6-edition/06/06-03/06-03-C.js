import { inherit } from "../06-01/06-01-04/example-6-1";

/*
 * delete 表达式的结果为 true 或者 false；
 */

console.log("\n-------------------------------------------------- 01");

const obj01 = inherit({ y: 2 });
obj01.x = 1;

/*
 * true
 *
 * 删除成功
 */
console.log(delete obj01.x);

/*
 * true
 *
 * 删除不存在的属性
 */
console.log(delete obj01.x);

/*
 * true
 *
 * 删除 inherited property
 */
console.log(delete obj01.y);

/*
 * true
 *
 * 操作数不是'属性访问表达式'
 */
console.log(delete 0);
export {};
