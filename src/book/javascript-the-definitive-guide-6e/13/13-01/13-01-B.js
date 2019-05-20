(function() {
  /*
   * 在 client-side, window 对象是 global object, 位于 scope chain 的最顶层；
   * 所以在使用 window 对象的属性和方法时, 可以省略 window, 如：
   *     window.alert 可以简写为 alert；
   *     window.setTimeout() 可以简写为 setTimeout()；
   */
  console.log("\n-------------------------------------------------- 01");

  setTimeout(function() {
    alert("hello world");
  }, 2000);
})();

(function() {
  /*
   * window 对象上的 window 属性始终指向自己；
   */
  console.log("\n-------------------------------------------------- 02");

  /* true */
  console.log(window == window.window);
  /* true */
  console.log(window.window == window.window.window);
})();
