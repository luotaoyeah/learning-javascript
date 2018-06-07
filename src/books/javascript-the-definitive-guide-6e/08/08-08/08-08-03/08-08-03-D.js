import { partialLeft } from "./08-08-03-B";

(function() {
  /*
   * 将 partial application 和 higher-order function 结合起来；
   */
  console.log("\n-------------------------------------------------- 01");

  function compose(f, g) {
    return function() {
      return f.call(this, g.apply(this, arguments));
    };
  }

  const not = partialLeft(compose, function(x) {
    return !x;
  });

  function even(n) {
    return n % 2 === 0;
  }

  const odd = not(even);

  /* false */
  console.log(odd(2));
})();
