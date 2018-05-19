/*
 * Object.keys()：
 *     返回对象的 enumerable 为 true 的 own properties 的属性名称数组；
 */
import { inherit } from "../06-01/06-01-04/example-6-1";

console.log("\n-------------------------------------------------- 01");

const obj01 = inherit({ x: 1 });
obj01.y = 2;
Object.defineProperty(obj01, "z", {
  value: 3,
  enumerable: false
});

/* [ 'y' ] */
console.log(Object.keys(obj01));

export {};
