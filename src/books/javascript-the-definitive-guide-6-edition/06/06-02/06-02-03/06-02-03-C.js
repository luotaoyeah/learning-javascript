/*
 * 给对象的属性赋值时，如果对象上有该 own property，但是属性是只读的，报错：
 */
import { inherit } from "../../06-01/06-01-04/example-6-1";

console.log("\n-------------------------------------------------- 01");

/*
/!* TypeError: Cannot assign to read only property 'prototype' of function 'function Object() { [native code] }' *!/
Object.prototype = {};
*/

/*
 * 给对象的属性赋值时，如果对象上有该 inherited property，但是属性是只读的，报错：
 */
console.log("\n-------------------------------------------------- 02");

const obj01 = {};
Object.defineProperty(obj01, "x", {
  value: 1,
  writable: false
});
const obj02 = inherit(obj01);

/*
/!* TypeError: Cannot assign to read only property 'x' of object '#<Object>' *!/
obj02.x = 2;
*/

/*
 * 给对象的属性赋值时，如果对象上有该 inherited property，则会在对象上创建新的属性；
 * 但如果该继承属性没有 setter，且对象的 extensible 为 false，报错；
 */
console.log("\n-------------------------------------------------- 02");

const obj03 = { x: 1 };

const obj04 = inherit(obj03);
Object.preventExtensions(obj04);

/*
/!* TypeError: Cannot add property x, object is not extensible *!/
obj04.x = 2;
*/

export {};
