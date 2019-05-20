(function() {
  /*
   * TODO 待验证
   * function declaration statement 不是真正的 statements,
   * 它只能出现在最外层代码中, 或者其他的 function 的函数体的最外层；
   * 它不能出现在 for, while, if, try/catch, with 语句中；
   */
  console.log("\n-------------------------------------------------- 01");

  if (1 < 2) {
    function fn01() {}
  }

  for (let i = 0; i < 10; i++, function fn02() {}) {
    function fn03() {}
  }

  try {
    throw new Error();
  } catch (e) {
    function fn04() {}
  }

  with ({ x: "x" }) {
    function fn05() {}
  }
})();
