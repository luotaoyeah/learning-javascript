(function() {
  /*
   * 通常我们可以在函数中对传入的参数进行类型检查，
   * 如果参数类型不满足条件，可以提前抛出错误，而不用等到执行之后报错；
   */
  console.log("\n-------------------------------------------------- 01");

  (function fn01(n) {
    /*
        /!* TypeError: n.toFixed is not a function *!/
        console.log(n.toFixed(2));
    */
  })("x");

  (function fn02(n) {
    if (Number.isNaN(Number(n))) {
      throw new Error("n must be a number");
    }

    console.log(n.toFixed(2));
  })("x");
})();
