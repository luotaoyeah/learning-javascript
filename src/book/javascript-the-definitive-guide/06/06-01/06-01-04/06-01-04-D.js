import { inherit } from "./example-6-1";

/*
 * 传递对象给函数时, 为了避免函数修改对象, 可以传递一个对象的继承对象；
 * 这样函数可以通过继承对象读取到对象的所有属性, 但是对继承对象的修改将不会影响到对象；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = { x: 1 };
const obj02 = inherit(obj01);

/**
 *
 * @param obj
 */
function fn(obj) {
  obj.x = 2;
}

fn(obj02);
/* 2 */
console.log(obj02.x);
/* 1 */
console.log(obj01.x);

export {};
