/*
 * Object.defineProperty() 和 Object.defineProperties() 在下面几种情况下会报错；
 */

/*
 * 如果一个对象是 non-extensible 的, 则不能给对象添加新的属性；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = { x: 1 };
Object.preventExtensions(obj01);

/*
  /!* TypeError: Cannot add property y, object is not extensible *!/
  obj01.y = 2;
*/

/*
  /!* TypeError: Cannot define property y, object is not extensible *!/
  Object.defineProperty(obj01, "y", { value: 2 });
*/

export {};
