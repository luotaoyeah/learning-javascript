(function() {
  /*
   * window.document 表示当前文档对象；
   */
  console.log("\n-------------------------------------------------- 01");

  /* true */
  console.log(document instanceof Document);

  const element = document.getElementById("timestamp");
  /* true */
  console.log(element instanceof HTMLElement);

  if (element) {
    if (element.firstChild === null) {
      element.appendChild(document.createTextNode(new Date().toISOString()));
    }
  }
})();
