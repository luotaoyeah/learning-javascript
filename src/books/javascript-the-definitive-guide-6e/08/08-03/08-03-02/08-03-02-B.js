(function() {
  /*
   * arguments 的一个主要用途是用来实现'可变长度的参数列表'，
   * 即在定义函数时无法确定调用函数时真正传入的参数个数，
   * 函数内部对于传入任意个参数都可以进行处理；
   */
  console.log("\n-------------------------------------------------- 01");

  function max() {
    let max = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }

    return max;
  }

  /* 3 */
  console.log(max(1, 2, 3));
  /* 4 */
  console.log(max(1, 2, 3, 4));
  /* 5 */
  console.log(max(1, 2, 3, 4, 5));
})();
