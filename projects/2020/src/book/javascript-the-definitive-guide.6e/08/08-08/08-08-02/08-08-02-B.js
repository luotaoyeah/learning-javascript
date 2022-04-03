(function() {
  /*
   * example
   */
  console.log("\n-------------------------------------------------- 01");

  function mapper(fn) {
    return function(array) {
      return array.map(fn);
    };
  }

  /* [ 1, 4, 9 ] */
  console.log(
    mapper(function(x) {
      return x * x;
    })([1, 2, 3])
  );
})();

(function() {
  /*
   * 接收 f 和 g, 返回 f(g())；
   */
  console.log("\n-------------------------------------------------- 02");

  function compose(f, g) {
    return function() {
      return f.call(this, g.apply(this, arguments));
    };
  }

  function add(x) {
    return x + x;
  }
  function multiply(x) {
    return x * x;
  }

  /* 18 */
  console.log(
    compose(
      add,
      multiply
    )(3, 3)
  );

  /* 36 */
  console.log(
    compose(
      multiply,
      add
    )(3, 3)
  );
})();
