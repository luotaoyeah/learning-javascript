/*
 * 13.6.1 What JavaScript Can’t Do
 */

(function() {
  /*
   * 阻止恶意代码的第一道防线是：不支持某些特性；
   * 如：
   *     不能读取文件目录信息；
   *     不能删除任意文件；
   *     只支持 HTTP, WebSocket 协议的网络连接, 不支持通用的网络功能；
   */

  /*
   * 阻止恶意代码的第二道防线是：对某些支持的特性, 强制添加一些限制；
   * 如：
   *     对于打开新的浏览器窗口, 只能通过特定的用户交互事件, 如'鼠标点击'；
   *     对于已经打开的窗口, JS 只能关闭自己打开的窗口, 关闭其他窗口需要用户确认；
   *     不能手动设置 FileUpload 元素的 value 属性；
   *     同源策略（Same-Origin Policy）：
   *         不能读取从其他服务器加载的文档的内容；
   *         不能给从其他服务器加载的文档添加事件监听；
   */

  /*
   * 不同浏览器对于某些特性的支持和限制, 存在差别；
   */
  console.log("\n-------------------------------------------------- 01");
})();
