import { inherit } from "../06-01/06-01-04/example-6-1";

/*
 * Object.getOwnPropertyNames()：
 *     返回对象的 own properties 的属性名称数组，包括 enumerable 为 false 的属性；
 */

console.log("\n-------------------------------------------------- 01");

const obj01 = inherit({ x: 1 });
obj01.y = 2;
Object.defineProperty(obj01, "z", {
  value: 3,
  enumerable: false
});

/* [ 'y', 'z' ] */
console.log(Object.getOwnPropertyNames(obj01));

export {};
