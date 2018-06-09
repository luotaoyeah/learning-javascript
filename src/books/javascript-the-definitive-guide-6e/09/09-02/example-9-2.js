/*
 * Example 9-2. A Range class using a constructor
 */

(function() {
  /*
   * a. constructor 的 name 通常首字母大写；
   * b. constructor 中不用手动创建对象，其返回值就是新创建的对象；
   * c. constructor 中不用手动返回对象，会自动返回新创建的对象；
   * d. constructor 的执行过程：
   *     1. 创建一个对象；
   *     2. 将 constructor 作为对象的一个 method 进行调用；
   *     3. 返回该对象；
   */
  console.log("\n-------------------------------------------------- 01");

  function Range(from, to) {
    this.from = from;
    this.to = to;
  }

  Range.prototype.includes = function(x) {
    return this.from <= x && x <= this.to;
  };
  Range.prototype.toString = function() {
    return "(" + this.from + ", " + this.to + ")";
  };

  const range = new Range(3, 6);
  /* true */
  console.log(range.includes(4));
  /* (3, 6) */
  console.log(range.toString());
})();
