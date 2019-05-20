/*
 * 13.6.2.1 Relaxing the same-origin policy
 */

(function() {
  /*
   * same-origin policy 的限制有时候过于严格,
   * 可以通过一定的方式解除或者放宽它的限制；
   *     1. 有些大型网站的多个业务可能位于多个不同的子域名下,
   *        而这些业务需要越过同源策略的限制, 实现相互之间的交互；
   *        这时候, 可以给他们的 document 的 domain 属性设置相同的值,
   *        这样, 同源策略对它们将不再生效；
   *
   *        document.domain 的属性值有一些限制：
   *            a. 必须至少包含一个点
   *            b. 必须是源的某一完整部分；
   *               如果源为：http://home.a.com,
   *               则 document.domain 可以为：a.com
   *
   *      2. 第二种方式为 CORS（Cross Origin Resource Share）,
   *         它给 HTTP
   *             增加了一个请求头：Origin
   *             增加了一个响应头：Access-Control-Allow-Origin
   *
   *      3. 第三种方式称之为：cross-document messaging
   *         在一个源中调用 window.postMessage() 方法,
   *         在另一个源中监听 window.onmessage 事件,
   *         实现不同源之间纯文本方式的交互；
   */
  console.log("\n-------------------------------------------------- 01");
})();
