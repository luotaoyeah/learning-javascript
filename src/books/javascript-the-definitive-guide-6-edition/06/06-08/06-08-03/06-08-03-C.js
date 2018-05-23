/*
 * Object.seal()：
 *    a. 将对象设置为 non-extensible 的；
 *    b. 将对象的 own properties 设置为 non-configurable 的；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = { x: "x" };
Object.seal(obj01);

/*
  /!* TypeError: Cannot add property y, object is not extensible *!/
  obj01.y = "y";
*/

/*
  /!* TypeError: Cannot delete property 'x' of #<Object> *!/
  delete obj01.x;
*/

/*
/!* TypeError: Cannot redefine property: x *!/
Object.defineProperty(obj01, "x", {
  configurable: true,
  enumerable: true
});
*/

obj01.x = "foo";
/* foo */
console.log(obj01.x);

export {};
