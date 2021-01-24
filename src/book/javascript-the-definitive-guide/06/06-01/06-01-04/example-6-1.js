/*
 * Example 6-1. Creating a new object that inherits from a prototype
 */
console.log("\n-------------------------------------------------- 01");

/**
 * 继承
 * @param p 原型对象
 * @return object 一个新的对象, 其 prototype 对象为 p；
 */
function inherit(p) {
  if (p === null) {
    throw new TypeError();
  }

  if (Object.create) {
    return Object.create(p);
  }

  const type = typeof p;
  if (type !== "object" && type !== "function") {
    throw new TypeError();
  }

  function F() {}

  F.prototype = p;
  return new F();
}

/*
const obj01 = inherit(Object.prototype);
/!* true *!/
console.log(obj01.__proto__ === {}.__proto__);
*/

export { inherit };
