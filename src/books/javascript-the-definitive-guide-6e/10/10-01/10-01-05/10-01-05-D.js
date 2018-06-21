(function() {
  /*
   * 自定义的 anchor condition：
   * 除了 \b \B ^ $ 等预定义的 anchor condition 之外，
   * 可以将任意的 pattern 作为自定义的 anchor condition，形式为：(?=)；
   * 表示匹配时必须满足这个 condition，但是这个 condition 不会包含在最终的匹配结果中；
   */
  console.log("\n-------------------------------------------------- 01");

  const pattern01 = /java(?=:)/;
  /* null */
  console.log("java".match(pattern01));
  /* null */
  console.log("javascript".match(pattern01));
  /* [ 'java', index: 0, input: 'java:script' ] */
  console.log("java:script".match(pattern01));
})();

(function() {
  console.log("\n-------------------------------------------------- 02");

  const pattern01 = /\bjava\b/;
  const pattern02 = /(?=\s)java(?=\s)/;

  /* [ 'java', index: 0, input: 'java' ] */
  console.log("java".match(pattern01));
  /* [ 'java', index: 1, input: ' java ' ] */
  console.log(" java ".match(pattern01));
  /* null */
  console.log("java".match(pattern02));
  /* null */
  console.log(" java ".match(pattern02));
})();
