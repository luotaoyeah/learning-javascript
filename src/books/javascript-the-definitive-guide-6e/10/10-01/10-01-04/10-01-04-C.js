(function() {
  /*
   * () 将多个 characters 分为一组，这个分组可以和 | * + ? {n,m} 等一起使用；
   */
  console.log("\n-------------------------------------------------- 01");

  const pattern01 = /x\d{2}/;
  const pattern02 = /(x\d){2}/;

  /* [ 'x99', index: 0, input: 'x99' ] */
  console.log("x99".match(pattern01));
  /* null */
  console.log("x99".match(pattern02));
  /* null */
  console.log("x9x9".match(pattern01));
  /* [ 'x9x9', 'x9', index: 0, input: 'x9x9' ] */
  console.log("x9x9".match(pattern02));
})();

(function() {
  console.log("\n-------------------------------------------------- 02");

  const pattern01 = /javascript*/;
  const pattern02 = /java(script)*/;

  /* null */
  console.log("javas".match(pattern01));
  /* [ 'java', undefined, index: 0, input: 'javas' ] */
  console.log("javas".match(pattern02));
})();