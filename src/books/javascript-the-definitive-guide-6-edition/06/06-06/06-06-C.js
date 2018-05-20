import { inherit } from "../06-01/06-01-04/example-6-1";

/*
 * accessor property 和 data property 一样，可以被继承；
 */

console.log("\n-------------------------------------------------- 01");

const obj01 = {
  x: 1,
  y: 2,
  get sum() {
    return this.x + this.y;
  }
};

const obj02 = inherit(obj01);

obj02.x = 3;
obj02.y = 4;
/* 7 */
console.log(obj02.sum);

export {};
