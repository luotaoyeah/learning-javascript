import { inherit } from "../../06-01/06-01-04/example-6-1";

/*
 * 给对象的某个属性赋值时，
 *     如果对象上有这个属性，则直接修改属性的值；
 *     如果对象上没有这个属性，则在对象上创建这个属性；
 *         如果对象上有同名的继承属性，则属性创建之后，继承属性会被隐藏；
 *
 * 即：给属性赋值时，永远不会修改原型对象的属性；
 */
console.log("\n-------------------------------------------------- 01");
const obj01 = { y: 2 };
const obj02 = inherit(obj01);
obj02.x = 1;

/* 1 */
console.log(obj02.x);
/* 2 */
console.log(obj02.y);

obj02.x = 2;
obj02.y = 3;
/* 2 */
console.log(obj02.x);
/* 3 */
console.log(obj02.y);
/* 2 */
console.log(obj01.y);

export {};
