/*
 * New Syntax in ES6
 *     Object Literal Extensions
 *         Iterating with for...of
 */

console.log('\n-------------------------------------------------- 01');
{
  /*
   * 对于 iterable 的对象（array, string, etc）, 可以使用新的 for...of 迭代方式；
   */

  const arr01 = ['a', 'b', 'c'];

  /* 使用旧的 for 循环进行迭代 */
  for (let i = 0; i < arr01.length; i++) {
    console.log(arr01[i]);
  }

  /* 使用新的 for...of 循环进行迭代 */
  for (let i of arr01) {
    console.log(i);
  }

  for (let s of 'hello') {
    console.log(s);
  }
}
