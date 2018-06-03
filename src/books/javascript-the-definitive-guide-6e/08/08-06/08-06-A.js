/*
 * 8.6 Closures
 */

/*
 * JS 使用了 lexical scoping，意思是 function 在执行时使用的是 function 在定义时的 variable scope，
 * 而不是 function 在执行时时的 variable scope；
 * 为了实现 lesical scoping，function object 的内部状态不仅包含了 function 的 code，
 * 同时包含了对当前 scope chain 的引用；
 * 这种把 function object 和 scope 结合起来，就称之为一个 closure；
 */

/*
 * 每一个 function 都是一个 closure，因为每一个 function object 都关联了一个 scope chain；
 * 多数 function 在执行的时候，使用的 scope chain 都是该 function 在定义的时候的 scope chain；
 * 但是 function 在执行的时候使用的 scope chain 也可以不是 function 在定义的时候的 scope chain；
 */

/*
 *
 */
(function() {
  console.log("\n-------------------------------------------------- 01");
  const scope = "scope01";

  function checkScope() {
    const scope = "scope02";

    return (function() {
      return scope;
    })();
  }

  /* scope02 */
  console.log(checkScope());
})();

/*
 * lexical scoping 的基本原则是：function 在执行的时候使用的 scope chain 是它在定义的时候的 scope chain；
 * 所以 inner function 定义的时候的 scope chain 中的 scope 变量绑定的值为 "scope02"，
 * 虽然 inner function 是在 outer function 外面执行的，但是它使用的 scope chain 是它在定义的时候的 scope chain；
 * 即 inner function 在定义的时候，会捕获当时的 scope chain 中的 variables；
 */
(function() {
  console.log("\n-------------------------------------------------- 02");
  const scope = "scope01";
  function checkScope() {
    const scope = "scope02";

    return function() {
      return scope;
    };
  }

  /* scope02 */
  console.log(checkScope()());
})();
