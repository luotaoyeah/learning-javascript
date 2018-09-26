/*
 * New Syntax in ES6
 *     Variable Declarations: let, const, and Block Scoping
 *         Block Scoping with let and const
 */

/*
 * let 声明的变量属于块级作用域（block scope），
 * 即作用域属于最近的两个花括号之间；
 */
console.log("\n-------------------------------------------------- 01");
let nbr = 42;
{
  let n = 1000;

  /*
    // 跟 var 不一样，在同一个作用域内，同一个变量只能声明一次；
    let n = 1001; // SyntaxError: Identifier 'n' has already been declared
  */
}
console.log(nbr);

/*
 * const 跟 let 类似，区别在于使用 const 声明的变量必须在声明时进行赋值，
 * 且之后不能再次赋值；
 */
console.log("\n-------------------------------------------------- 02");
/*
  // 必须在声明时进行赋值
  const value; // SyntaxError: Missing initializer in const declaration
*/
const value = 42;
console.log(value);
/*
  // 声明之后不能再次赋值
  value = 1000; // TypeError: Assignment to constant variable
*/

/*
 * let 和 const 声明的变量，不存在变量提升（hoist）；
 */
console.log("\n-------------------------------------------------- 03");
(function() {
  /* undefined */
  console.log(n);
  var n = 42;
})();
/* 上面的代码等价于： */
(function() {
  var n;
  /* undefined */
  console.log(n);
  n = 42;
})();

{
  /*
    //  由于不存在变量提升，在变量定义之前访问变量会报错；这种现象称之为 TDZ（Temporal Dead Zone）；
    console.log(n); // ReferenceError: n is not defined
  */
  let n = 42;
}
