/*
 * New Syntax in ES6
 *     Object Literal Extensions
 *         Template Literals and Delimiters
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 普通的 string 使用单引号（'）或者双引号（"）定义,
   * template string 使用反引号（backtick）（`）定义；
   */
  const name = `foo`;

  /*
   * template string 中可以使用 ${} 插入任意的表达式
   */
  console.log(`hello ${name}`); // hello foo

  const a = 1;
  const b = 1;
  console.log(`${a} + ${b} = ${a + b}`); // 1 + 1 = 2

  /*
   * 使用 template string 可以直接定义多行文本
   */
  console.log(`hello

world`);

  /*
   * 使用普通的 string 定义多行文本, 需要使用转义字符\n
   */
  console.log("hello\n\nworld");
}
