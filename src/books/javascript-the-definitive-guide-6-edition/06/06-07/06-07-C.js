/*
 * Object.defineProperty()：
 *     添加一个属性，并指定属性的 property descriptor 对象；
 *     设置属性的 property descriptor 对象的属性；
 */

/*
 * 添加属性 x，并设置 enumerable 为 false；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = {};

Object.defineProperty(obj01, "x", {
  value: 1,
  writable: true,
  enumerable: false,
  configurable: true
});
/* 1 */
console.log(obj01.x);
/* false */
console.log(obj01.propertyIsEnumerable("x"));

/*
 * 设置 writable 为 false；
 */
console.log("\n-------------------------------------------------- 02");

Object.defineProperty(obj01, "x", {
  writable: false
});
/*
  /!* TypeError: Cannot assign to read only property 'x' of object '#<Object>' *!/
  obj01.x = 2;
*/

/*
 * 通过 Object.defineProperty() 设置属性值；
 */
console.log("\n-------------------------------------------------- 03");

Object.defineProperty(obj01, "x", {
  value: 2
});
/* 2 */
console.log(obj01.x);

/*
 * 将 data property 修改为 accessor property；
 */
console.log("\n-------------------------------------------------- 04");

Object.defineProperty(obj01, "x", {
  get() {
    return 0;
  }
});
/* 0 */
console.log(obj01.x);

export {};
