/*
 * 6.4 Testing Properties
 */

/*
 * 对象可以看作是属性的集合，判断对象上是否存在某个属性，有以下几种方式；
 */

/*
 * in 操作符，判断对象上是否存在指定名称的 own property 或者 inherited property；
 *     左边的操作数是一个字符串，表示属性名称；
 *     右边的操作数是一个对象；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = { x: 1 };
/* true */
console.log("x" in obj01);
/* false */
console.log("y" in obj01);
/* true */
console.log("toString" in obj01);

export {};
