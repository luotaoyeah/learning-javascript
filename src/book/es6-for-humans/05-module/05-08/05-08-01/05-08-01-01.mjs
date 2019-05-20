/*
 * Modules
 *     Common Pitfalls
 *         Syntax
 */

console.log("\n-------------------------------------------------- 01");
/*
 * import 和 export 语句只能出现在模块文件的最顶层,
 * 不能出现在其他代码块中
 */

{
  export const name = "FOO"; // Unexpected token export
}
