/*
 * 13.1 Client-Side JavaScript
 */

(function() {
  /*
   * Window 对象表示当前浏览器窗口, 或者当前 frame；
   * 可以通过 window 访问当前的 Window 对象,
   * 它上面定义了很多的属性和方法；
   */
  console.log("\n-------------------------------------------------- 01");

  setTimeout(function() {
    window.location = "https://www.github.com";
  }, 2000);
})();
