import { classOf } from "./example-6-4";

/*
 * 自定义构造函数的实例对象的 class 特性始终是 Object；
 */

console.log("\n-------------------------------------------------- 01");

function Foo() {}

/* Object */
console.log(classOf(new Foo()));

export {};
