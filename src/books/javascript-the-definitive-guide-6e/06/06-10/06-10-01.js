/*
 * Object.prototype 上有一些方法，通常需要被其他类型复写，从而实现更有价值的作用；
 */

/*
 * 6.10.1 The toString() Method
 */

/*
 * Object.prototype.toString()：
 *     将对象转换为字符串；
 *     在任何需要将对象转换为字符串的时候，该方法会被自动调用；
 */
console.log("\n-------------------------------------------------- 01");
/* x_[object Object] */
console.log("x_" + { x: "x" });

/*
 * 默认情况下，对象的 toString() 返回的是一个类似 [object Class] 的字符串，
 * 其中 Class 表示具体的类型（构造函数）；
 */
console.log("\n-------------------------------------------------- 02");
/* [object Date] */
console.log(Object.prototype.toString.call(new Date()));

/*
 * 因为默认的 toString() 方法用途不大，
 * 通常都需要复写该方法，实现更加有价值的用途；
 */
console.log("\n-------------------------------------------------- 03");
/* [object Date] */
console.log(Object.prototype.toString.call(new Date()));
/* Thu May 24 2018 21:52:30 GMT+0800 (CST) */
console.log(new Date().toString());

/* [object Array] */
console.log(Object.prototype.toString.call([1, 2, 3]));
/* 1,2,3 */
console.log([1, 2, 3].toString());

/* [object Function] */
console.log(
  Object.prototype.toString.call(() => {
    console.log("hello");
  })
);
/* ()=>{console.log("hello")} */
console.log(
  (() => {
    console.log("hello");
  }).toString()
);

export {};
