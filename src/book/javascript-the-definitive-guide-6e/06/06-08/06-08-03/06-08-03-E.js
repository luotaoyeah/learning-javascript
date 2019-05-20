/*
 * Object.freeze()：
 *     a. 将对象设置为 non-extensible 的；
 *     b. 将对象的 own properties 设置为 non-configurable 的；
 *     c. 将对象的 own data properties 设置为 non-writable 的；
 */
console.log("\n-------------------------------------------------- 01");
const obj01 = { x: "x" };
/* { value: 'x', writable: true, enumerable: true, configurable: true } */
console.log(Object.getOwnPropertyDescriptor(obj01, "x"));
Object.freeze(obj01);
/* { value: 'x', writable: false, enumerable: true, configurable: false } */
console.log(Object.getOwnPropertyDescriptor(obj01, "x"));

/*
 * Object.freeze() 只影响 data property, 不影响 accessor property；
 */
console.log("\n-------------------------------------------------- 02");
const obj02 = { x: "x" };
Object.defineProperty(obj02, "y", {
  get() {
    return "y";
  },
  set(value) {
    /*  */
  }
});
Object.freeze(obj02);
/*
  /!* TypeError: Cannot assign to read only property 'x' of object '#<Object>' *!/
  obj02.x = "foo";
*/
obj02.y = "bar";

export {};
