/*
 * 7.8 Array Methods
 */

/*
 * 7.8.1 Array.prototype.join()
 */

(function() {
  /*
   * Array.prototype.join() 执行以下操作：
   *     a. 将所有 element 转换为 string；
   *     b. 将所有 string 连起来组成一个 string；
   *     c. 返回最终的 string；
   *
   * 可以指定一个额外的 string, 用来连接每个 element string, 默认为(,)；
   */
  console.log("\n-------------------------------------------------- 01");

  const array01 = [1, 2, 3];

  /* 1,2,3 */
  console.log(array01.join());
  /* 123 */
  console.log(array01.join(""));
  /* 1 2 3 */
  console.log(array01.join(" "));
  /* 1-2-3 */
  console.log(array01.join("-"));
})();

(function() {
  /*
   * Array.prototype.join() 是 String.prototype.split() 的逆操作；
   */
  console.log("\n-------------------------------------------------- 02");

  const array01 = ["a", "b", "c"];

  /* [ 'a', 'b', 'c' ] */
  console.log(array01);
  /* [ 'a', 'b', 'c' ] */
  console.log(array01.join().split(","));
})();
