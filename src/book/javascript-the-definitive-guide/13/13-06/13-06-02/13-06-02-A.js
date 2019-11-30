/*
 * 13.6.2 The Same-Origin Policy
 */

(function() {
  /*
   * 同源策略是用来限制 JS 对页面的操作的,
   * 通常在页面中包含了 <iframe> 或者打开了其他窗口的时候起作用；
   * 同源策略的含义是：
   *     JS 只能读取那些'跟 JS 所在文档属于同源的其他文档（window, document）'的属性；
   */

  /*
   * 源（origin）包含三部分内容：protocol, host, port；
   */

  /*
   * 同源策略中的源指的是 JS 文件所在的 HTML 文档的源, 而不是 JS 文件本身的源；
   * 如：http://www.a.com 的页面中引入了 http://www.b.com/index.js,
   * 则对于 http://www.b.com/index.js 文件中的代码,
   * 它的源是：http://www.a.com, 而不是 http://www.b.com
   */

  /*
   * 同源策略并不对所有对象的所有属性生效, 但是对大部分属性生效,
   * 同时对 document 对象的所有属性生效, 即一个源中的 JS 不能访问来自其他源的 document；
   */

  /*
   * 同源策略对 ajax 生效,
   * 即一个源中的 JS 只能通过 ajax 访问同源的资源；
   */
  console.log("\n-------------------------------------------------- 01");
})();
