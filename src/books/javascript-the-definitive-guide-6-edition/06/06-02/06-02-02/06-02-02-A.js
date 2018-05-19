import { inherit } from "../../06-01/06-01-04/example-6-1";
/*
 * 6.2.2 Inheritance
 */

/*
 * 对象有 own properties 以及从 prototype 对象继承的属性；
 * 当访问对象的某个属性时，
 *     首先从对象的 own properties 找，
 *     如果没找到，且对象的 prototype 对象不为空，则从 prototype 对象的 own properties 找；
 *     如果没找到，且 prototype 对象的 prototype 对象不为空，则从 prototype 对象的 prototype 对象的 own properties 找；
 *     直到找到属性，或者对象的 prototype 对象为空；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = { x: 1 };

const obj02 = inherit(obj01);
obj02.y = 2;

const obj03 = inherit(obj02);
obj03.z = 3;

/*
 * [object Object]
 *
 * toString() 方法继承自 Object.prototype；
 */
console.log(obj03.toString());
/*
 * 6
 *
 * x 继承自 obj01；
 * y 继承自 obj02；
 * z 来自 obj03 的 own properties；
 */
console.log(obj03.x + obj03.y + obj03.z);

export {};
