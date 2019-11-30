(function() {
  /*
   * Window, Document, Element 上有一类重要的属性：事件处理函数,
   * 这类属性通常以 on 开头；
   */
  console.log("\n-------------------------------------------------- 01");

  const element = document.getElementById("timestamp");
  if (element) {
    element.onclick = function() {
      this.innerHTML = new Date().toISOString();
    };
  }
})();
