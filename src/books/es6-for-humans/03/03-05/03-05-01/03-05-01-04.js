/*
 * Destructuring
 *     Destructured Parameters
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 注意区分'解构的默认值'和'参数的默认值'之间的区别
   */

  function foo({ num01 = 42 } = {}, { num02 } = { num02: 42 }) {
    console.log(num01, num02);
  }

  foo(); // 42 42
  foo({}, {}); // 42 undefined
}
