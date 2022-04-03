/*
 * New Syntax in ES6
 *     Rest and Spread Operators
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * Function.length 属性表示：期望的参数个数, 不包括有默认值的参数, 也不包括 rest parameter；
   * arguments.length 属性表示：实际传递的参数个数,
   */

  function showCollections(id, name = "foo", ...collection) {
    console.log(arguments.length);
  }

  /*
   * 参数 name 有默认值, 因此不包括在 length 里面,
   * 参数 collection 是 rest parameter, 因此不包括在 length 里面,
   * 只有参数 id 包括在 length 里面；
   */
  console.log(showCollections.length); // 1

  /*
   * 实际传递的参数个数为 4, 因此 arguments.length 为 4
   */
  showCollections("", "", "", ""); // 4
}
