/*
 * 13.3 Execution of JavaScript Programs
 */

(function() {
  /*
   * HTML 中 JS 代码的执行分为两个阶段：
   *     第一阶段：
   *         当 HTML 加载时, <script> 标签中的代码（内嵌的和引入的）会依次执行；
   *     第二阶段：
   *         当事件触发时, 执行相应的事件处理函数和 javascript:URL；
   *
   * JS 是事件驱动的, 单线程的；
   */
  console.log("\n-------------------------------------------------- 01");
})();
