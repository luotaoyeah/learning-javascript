/*
 * 8.2.3 Constructor Invocation
 */

(function() {
  /*
   * 如果一个 function invocation 或者 method invocation 前面加上关键字 new,
   * 则称之为 constructor invocation；
   */
  console.log("\n-------------------------------------------------- 01");

  function fn01(name) {
    this.name = name;
  }

  /* undefined */
  console.log(fn01("tom"));
  /* fn01 { name: 'cat' } */
  console.log(new fn01("cat"));
})();
