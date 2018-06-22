(function() {
  /*
   * RegExp.prototype.golbal
   * RegExp.prototype.ignoreCase
   * RegExp.prototype.multiline
   */
  console.log("\n-------------------------------------------------- 01");
  /* true */
  console.log(/\d{3}?/gm.global);
  /* false */
  console.log(/\d{3}?/gm.ignoreCase);
  /* true */
  console.log(/\d{3}?/gm.multiline);
})();
