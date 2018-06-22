/*
 * RegExp.prototype.exec()
 */

(function() {
  /*
   * 当 exec() 结合 /g 使用时，它会每次查找一个匹配项，
   * 依次往后面查找，直到找不到匹配项时，返回 null，同时将 lastIndex 设为 0
   */
  console.log("\n-------------------------------------------------- 01");
  const pattern01 = /\d/g;
  let result = pattern01.exec("1a2b3c");

  /*
   * result: 1 , index: 0
   * result: 2 , index: 2
   * result: 3 , index: 4
   * lastIndex: 0
   */
  while (result !== null) {
    console.log("result:", result[0], ", index:", result.index);
    result = pattern01.exec("1a2b3c");
  }
  console.log("lastIndex:", pattern01.lastIndex);
})();
