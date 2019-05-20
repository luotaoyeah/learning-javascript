/*
 * 7.7 Multidimensional Arrays
 */

(function() {
  /*
   * JS 中的 multidimensional array 实际上就是 arrays of arrays,
   * 即 array 的 element 又是 array；
   */
  console.log("\n-------------------------------------------------- 01");

  const table = new Array(10);
  for (let i = 0; i < table.length; i++) {
    table[i] = new Array(10);
  }

  for (let row = 0; row < table.length; row++) {
    for (let col = 0; col < table[row].length; col++) {
      table[row][col] = row * col;
    }
  }

  /* 48 */
  console.log(table[6][8]);
})();
