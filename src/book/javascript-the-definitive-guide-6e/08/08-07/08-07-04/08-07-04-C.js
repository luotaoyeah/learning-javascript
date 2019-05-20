(function() {
  /*
   * Function.prototype.bind() 可以用来实现 partial application, 类似 currying；
   * 即除了绑定 this 之外, 还可以绑定该 function 其他的 parameters；
   *
   * 从第二个参数开始的参数值, 会绑定到 function 对应的参数上,
   * 这样返回的新的 function 将只需要传递未绑定参数的其他参数即可；
   */
  console.log("\n-------------------------------------------------- 01");

  function fn01(x, y) {
    return x + y;
  }

  const fn02 = fn01.bind(null, 9);

  /* 18 */
  console.log(fn02(9));
  /* 10 */
  console.log(fn02(1));
})();

(function() {
  /*
   * 同时绑定 this 和其他 parameters；
   */
  console.log("\n-------------------------------------------------- 02");

  const obj01 = { x: 9 };

  function fn01(y, z) {
    return this.x + y + z;
  }

  const fn02 = fn01.bind(obj01, 9);

  /* 27 */
  console.log(fn02(9));
  /* 19 */
  console.log(fn02(1));
})();
