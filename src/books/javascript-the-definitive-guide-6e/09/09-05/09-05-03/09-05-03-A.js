/*
 * 9.5.3 The Constructor Name
 */

(function() {
  /*
   * 在 JS 的某些实现中，function 有一个 name 属性；
   */
  console.log("\n-------------------------------------------------- 01");

  /* fn02 */
  console.log(function fn02() {}.name);
  /* "" */
  console.log(function() {}.name);
})();

(function() {
  /*
   * 可以使用间接的方式获取 function 的 name；
   */
  console.log("\n-------------------------------------------------- 02");

  Function.prototype.getName = function() {
    if ("name" in this) {
      return this.name;
    }
    return (this.name = this.toString().match(/function\s*([^(]*)\(/)[1]);
  };

  /* fn01 */
  console.log(function fn01() {}.name);
})();
