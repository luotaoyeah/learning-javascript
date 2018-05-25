import { inherit } from "../06-01/06-01-04/example-6-1";

/*
 * delete 只会删除 own properties，不会删除 inherited properties；
 */

console.log("\n-------------------------------------------------- 01");

const obj01 = { x: 1 };
const obj02 = inherit(obj01);
obj02.y = 2;

/* { y: 2 } */
console.log(obj02);

delete obj02.x;
delete obj02.y;

/* {} */
console.log(obj02);
/* { x: 1 } */
console.log(obj01);

export {};
