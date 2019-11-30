/*
 * 6.3 Deleting Properties
 */

/*
 * delete 是一个'操作符', 用来删除对象的属性；
 * 它的操作数必须是一个'属性访问表达式'；
 */
console.log("\n-------------------------------------------------- 01");
const obj01 = { x: 1, y: 2 };

/* { x: 1, y: 2 } */
console.log(obj01);

delete obj01.y;

/* { x: 1 } */
console.log(obj01);

export {};
