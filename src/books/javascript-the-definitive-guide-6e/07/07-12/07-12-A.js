/*
 * 7.12 Strings as Arrays
 */

(function() {
  /*
   * string 在某些行为上很像 read-only array；
   * 比如使用 [] 获取某个位置的字符；
   */
  console.log("\n-------------------------------------------------- 01");

  const str01 = "hello world";
  /* false */
  console.log(Array.isArray(str01));
  /* o */
  console.log(str01.charAt(4));
  /* o */
  console.log(str01[4]);
})();

(function() {
  /*
   * 因为 string 是 immutable 的，
   * 所以像 Array.prototype.push()，Array.prototype.pop() 等会修改原来的 array 的方法，
   * 不能在 string 上调用；
   */
  console.log("\n-------------------------------------------------- 02");

  const str01 = "hello world";

  /* HELLO WORLD */
  console.log(str01.toUpperCase());

  /* HELLO WORLD */
  console.log(
    Array.prototype.join.call(
      Array.prototype.map.call(str01, item => item.toUpperCase()),
      ""
    )
  );

  /*
    /!* TypeError: Cannot assign to read only property 'length' of object '[object String]' *!/
    console.log(Array.prototype.push.call(str01, "x"));
  */
})();
