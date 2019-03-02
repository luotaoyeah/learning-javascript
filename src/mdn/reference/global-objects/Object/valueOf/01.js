/*
 * Object.prototype.valueOf()：
 *     返回对象的原始类型的值；
 */
console.log("\n-------------------------------------------------- 01");
/* { x: 'x' } */
console.log({ x: "x" }.valueOf());

/*
 * 默认从 Object.prototype 继承的 valueOf() 返回对象本身；
 */
console.log("\n-------------------------------------------------- 02");
/* { x: 'x' } */
console.log({ x: "x" }.valueOf());

/*
 * 通过覆写 valueOf()，返回有用的信息；
 */
console.log("\n-------------------------------------------------- 03");

function Foo(number) {
  this.number = number;
}

/* e { number: 1 } */
console.log(new Foo(1).valueOf());

function Bar(number) {
  this.number = number;
}

Bar.prototype.valueOf = function() {
  return this.number;
};
/* 1 */
console.log(new Bar(1).valueOf());

export {};
