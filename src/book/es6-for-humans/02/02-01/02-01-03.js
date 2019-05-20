/*
 * New Syntax in ES6
 *     Variable Declarations: let, const, and Block Scoping
 *         Variables Declarations in loops
 */

/*
 *
 */
console.log("\n-------------------------------------------------- 01");
(function() {
  /*
   * 使用 var 声明的变量 i 属于函数作用域, 即在整个函数中只存在一个 i,
   * 所以循环结束之后, 数组中每个函数的 i 都是指向这一个 i；
   */
  let arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function() {
      return i;
    });
  }

  console.log(arr[0]()); // 3
})();

/*
 *
 */
console.log("\n-------------------------------------------------- 02");
(function() {
  let arr = [];

  /*
   * 可以在循环中创建一个闭包, 然后将循环变量 i 作为参数传入该闭包,
   * 则该闭包就可以捕获传入的参数变量；
   */
  for (var i = 0; i < 3; i++) {
    arr.push(
      (function(i) {
        return function() {
          return i;
        };
      })(i)
    );
  }

  console.log(arr[0]()); // 0
})();

/*
 *
 */
console.log("\n-------------------------------------------------- 03");
{
  let arr = [];

  /*
   * 在循环头中使用 let 声明的变量, 作用域为本次循环的循环体；
   */
  for (let i = 0; i < 3; i++) {
    arr.push(function() {
      return i;
    });
  }
  console.log(arr[0]()); // 0
}
