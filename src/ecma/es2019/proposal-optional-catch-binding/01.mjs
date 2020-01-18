/*
 * 该提案对 try/catch 语法进行了调整,
 * catch 块将可以省略 error 对象绑定
 */

console.log('\n-------------------------------------------------- 01');
{
  let success = undefined;

  try {
    JSON.parse('FOO');
    success = true;
  } catch (e) {
    /*
     * 旧的语法, catch 块必须声明错误对象绑定,
     * 即使这个对象不会被使用
     */
    success = false;
  }

  console.assert(success === false);
}

console.log('\n-------------------------------------------------- 02');
{
  let success = undefined;

  try {
    JSON.parse('FOO');
    success = true;
  } catch {
    /*
     * 新的语法, 此处可以不声明错误对象绑定
     */
    success = false;
  }

  console.assert(success === false);
}

export {};
