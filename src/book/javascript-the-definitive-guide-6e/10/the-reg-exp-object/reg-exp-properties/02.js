(function () {
  /*
   * `RegExp.global`
   * `RegExp.ignoreCase`
   * `RegExp.multiline`
   */

  const regExp01 = /\d{3}?/gim;
  console.assert(regExp01.global);
  console.assert(regExp01.ignoreCase);
  console.assert(regExp01.multiline);

  const regExp02 = /\d{3}?/;
  console.assert(!regExp02.global);
  console.assert(!regExp02.ignoreCase);
  console.assert(!regExp02.multiline);
})();
