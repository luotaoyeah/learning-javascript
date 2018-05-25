/*
 * non-configurable 的 property 不能被删除；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = {};
Object.defineProperty(obj01, "x", {
  value: 1,
  configurable: false
});

/*
/!* TypeError: Cannot delete property 'x' of #<Object> *!/
delete obj01.x;
*/

/*
 * non-extensible object 的 configurable property 可以被删除；
 */
console.log("\n-------------------------------------------------- 02");

const obj02 = { x: 1 };
Object.preventExtensions(obj02);
/* true */
console.log(delete obj02.x);

/*
 * global variable 不能被删除；
 * global function 不能被删除；
 * TODO 待验证
 */
console.log("\n-------------------------------------------------- 03");

var x01 = 1;
delete this.x01;

function fn01() {}
delete this.fn01;
