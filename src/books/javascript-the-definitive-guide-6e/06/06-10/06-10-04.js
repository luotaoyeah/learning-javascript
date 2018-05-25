/*
 * 6.10.4 The valueOf() Method
 */

/*
 * Object.prototype.valueOf()：
 *     类似 Object.prototype.toString()，区别在于：
 *     在需要将对象转换为 string 的时候，toString() 会被调用；
 *     在需要将对象转换为原始类型（通常是指 number）的时候，valueOf() 会被调用；
 *
 */
console.log("\n-------------------------------------------------- 01");
const obj01 = {
  toString() {
    return "tom";
  },
  valueOf() {
    return 18;
  }
};

/* tom */
console.log(String(obj01));
/* 18 */
console.log(Number(obj01));

export {};
