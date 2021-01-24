/*
 * Example 8-5. A Function.prototype.bind() method for ECMAScript 3
 */
(function() {
  console.log("\n-------------------------------------------------- 01");

  /**
   *
   * @param obj
   * @returns {function(): *}
   */
  Function.prototype.bind01 = function(obj) {
    const fn = this;
    const arguments01 = arguments;

    return function() {
      const args = [];

      for (let i = 1; i < arguments01.length; i++) {
        args.push(arguments01[i]);
      }

      for (let i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
      }

      return fn.apply(obj, args);
    };
  };

  const obj01 = { x: 9 };

  function fn01(y, z) {
    return this.x + y + z;
  }

  const fn02 = fn01.bind(obj01, 9);
  const fn03 = fn01.bind01(obj01, 9);

  console.log(fn02(9));
  console.log(fn03(9));
})();
