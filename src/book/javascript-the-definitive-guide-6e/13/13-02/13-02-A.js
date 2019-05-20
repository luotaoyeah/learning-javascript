/*
 * 13.2 Embedding JavaScript in HTML
 */

(function() {
  /*
   * HTML 中嵌入 JS 有四种方式：
   *     1. 写在 <script>alert('hello');</script> 标签中间；
   *     2. 写在单独的 JS 文件, 然后通过 <script src="index.js"></script> 标签的 src 属性引入；
   *     3. 在 HTML 元素的事件处理函数属性值中执行：<button onclick="alert('hello');"></button>；
   *     4. 在 URL 中, 通过 javascript: 协议执行；
   */
  console.log("\n-------------------------------------------------- 01");
})();
