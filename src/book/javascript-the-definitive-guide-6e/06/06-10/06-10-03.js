/*
 * 6.10.3 The toJSON() Method
 */

/*
 * Object.prototype 上并没有定义 toJSON() 方法,
 * 但是 JSON.stringify() 在序列化对象的时候, 会首先寻找对象上是否定义了 toJSON() 方法,
 * 如果有, 则调用 toJSON() 方法, 并序列化方法的返回值, 而不是序列化对象本身；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = { x: "x" };
const obj02 = {
  x: "x",
  toJSON() {
    return { y: "y" };
  }
};
/* {"x":"x"} */
console.log(JSON.stringify(obj01));
/* {"y":"y"} */
console.log(JSON.stringify(obj02));

export {};
