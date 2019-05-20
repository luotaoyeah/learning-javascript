/*
 * New Syntax in ES6
 *     Object Literal Extensions
 *         Tagged Template Literals
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 在 template literal 前面加上一个函数名称,
   * 这个 template literal 就称之为 tagged template literal；
   */

  /**
   *
   * @param literals
   * @param substitution
   * @return {string}
   */
  function upper(literals, ...substitution) {
    let result = "";

    for (let i = 0; i < substitution.length; i++) {
      result += literals[i] + substitution[i];
    }

    result += literals[literals.length - 1];

    return result.toUpperCase();
  }

  const name = "foo";
  const lang = "javascript";
  /* 如下, text 就是一个 tagged template literal */
  const text = upper`my name is ${name}, i love ${lang}`;
  console.log(text); // MY NAME IS FOO, I LOVE JAVASCRIPT

  /*
   * tagged template literal 最终会被转换为如下的函数调用：
   * 注意最后面的那个空字符串
   */
  const text02 = upper(["my name is ", ", i love ", ""], name, lang);
  console.log(text02); // MY NAME IS FOO, I LOVE JAVASCRIPT
}
