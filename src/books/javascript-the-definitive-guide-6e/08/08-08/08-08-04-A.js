/*
 * 8.8.4 Memoization
 */

(function() {
  /*
   *
   */
  console.log("\n-------------------------------------------------- 01");

  function memoize(fn) {
    const cache = {};

    return function() {
      const key = arguments.length + Array.prototype.join.call(arguments);
      if (key in cache) {
        return cache[key];
      }

      return (cache[key] = fn.apply(this, arguments));
    };
  }

  const fn01 = memoize(function(x, y) {
    const result = x + y;
    console.log(x + " + " + y + " = " + result);
    return result;
  });

  console.log(fn01(1, 1));
  console.log(fn01(1, 2));
  /* 从缓存取结果 */
  console.log(fn01(1, 1));
})();
