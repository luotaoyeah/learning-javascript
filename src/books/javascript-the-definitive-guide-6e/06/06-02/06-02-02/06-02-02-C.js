import { inherit } from "../../06-01/06-01-04/example-6-1";

/*
 * 给属性赋值时，会检查原型链，确定是否允许赋值；
 * 如果属性是继承的，且是只读的，则不允许给对象创建属性；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = {};
Object.defineProperty(obj01, "x", {
  value: 1,
  writable: false
});

const obj02 = inherit(obj01);
/* 1 */
console.log(obj02.x);

/* TypeError: Cannot assign to read only property 'x' of object '#<Object>' */
obj02.x = 2;

export {};
