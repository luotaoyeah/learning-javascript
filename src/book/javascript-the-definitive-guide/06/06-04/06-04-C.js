import { inherit } from "../06-01/06-01-04/example-6-1";

/*
 * Object.prototype.propertyIsEnumerable()：
 *     判断对象上是否存在指定的 own property, 且该属性的 enumerable 为 true；
 */

console.log("\n-------------------------------------------------- 01");

const obj01 = inherit({ y: 2 });
Object.defineProperties(obj01, {
  x: {
    value: 1,
    enumerable: true
  },
  z: {
    value: 3,
    enumerable: false
  }
});

/* true */
console.log(obj01.propertyIsEnumerable("x"));
/* false */
console.log(obj01.propertyIsEnumerable("y"));
/* false */
console.log(obj01.propertyIsEnumerable("z"));

export {};
