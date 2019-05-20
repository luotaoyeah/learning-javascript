/*
 * Modules
 *     The Module Pattern in Traditional JavaScript
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 在 ES5 中使用 closure 实现一个 module pattern
   */

  function Message(test) {
    function print() {
      console.log(test);
    }

    return {
      print
    };
  }

  const message = Message("foo");
  message.print(); // foo
}
