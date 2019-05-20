/*
 * JSON.stringify() 只会序列化 own enumerable 属性；
 */
console.log("\n-------------------------------------------------- 01");
const obj01 = { x: "" };
const obj02 = Object.create(obj01, {
  y: {
    value: "y",
    enumerable: false
  },
  z: {
    value: "z",
    enumerable: true
  }
});
/* {"z":"z"} */
console.log(JSON.stringify(obj02));

export {};
