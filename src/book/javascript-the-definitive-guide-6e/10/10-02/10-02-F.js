/*
 * String.prototype.match()
 */

(function () {
  /*
   * example
   */
  console.log('\n-------------------------------------------------- 01');

  var url = /(\w+):\/\/([\w.]+)\/(\S*)/;
  var text = 'visit my blog at http://www.example.com/~david';
  /* ["http://www.example.com/~david","http","www.example.com","~david"] */
  console.log(JSON.stringify(text.match(url)));
})();
