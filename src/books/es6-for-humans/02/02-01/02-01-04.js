/*
 * New Syntax in ES6
 *     Variable Declarations: let, const, and Block Scoping
 *         Variable Declarations with Function Parameters and Global Scope
 */

/*
 *
 */
console.log("\n-------------------------------------------------- 01");
(function fn(name) {
  /*
    // 在函数体最顶层，声明一个跟函数参数同名的变量会报错
    let name; // Block scoped variables cannot share name with 'var' variables or parameters in the same block scope
  */

  {
    /*
     * 在函数体中其他块级作用域，可以声明跟参数同名的变量，
     * 此时，在该作用域内，函数参数 name 会被隐藏（shadow）；
     */
    let name = "bar";
    console.log(name); // bar
  }
})("foo");

/*
 * JS 中的全局对象为 window（浏览器）或 global（node.js），
 * 在全局作用域（顶级作用域）中，使用 var 声明的变量，以及所有的函数声明，都会成为全局对象的属性，（TODO 待验证）
 * 而使用 let 声明的变量，不会称为全局对象的属性；
 */
console.log("\n-------------------------------------------------- 02");

var x = "x";
let z = "z";

function y() {}

console.log(global.x);
console.log(global.y);
console.log(global.z);
