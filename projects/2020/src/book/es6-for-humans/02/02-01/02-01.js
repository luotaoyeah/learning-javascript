/*
 * New Syntax in ES6
 *     Variable Declarations: let, const, and Block Scoping
 */

/*
 * var 关键字定义的变量属于函数作用域（function scope）,
 * 即作用域属于所在的函数；
 * 如果要使用 var 实现块级作用域, 需要将代码放到一个单独的 function 中,
 * 可以是一个普通的 function, 也可以是一个 IIFE；
 */

var price = 10;

/*
 * 使用普通的 function 实现块级作用域；
 */
console.log("\n-------------------------------------------------- 01");

function scopePrice() {
  var price = 12;
  /* 12 */
  console.log(price);
}

scopePrice();

/*
 * 使用 IIFE 实现块级作用域；
 */
console.log("\n-------------------------------------------------- 02");
(function() {
  var price = 12;
  /* 12 */
  console.log(price);
})();

/* 10 */
console.log(price);

/*
 * var 并不会创建块级作用域, 在相同的函数作用域内重复声明一个变量,
 * 实际上相当于给已有的变量重新赋值；
 */
console.log("\n-------------------------------------------------- 03");
if (price) {
  /* 并不会声明一个新的变量, 而是给全局的 price 变量赋值 */
  var price = 12;
}
/* 12 */
console.log(price);
