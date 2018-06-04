(function() {
  /*
   * 对于 call()，从第二个参数开始的参数，会作为 function 的参数传入；
   */
  console.log("\n-------------------------------------------------- 01");

  const obj01 = {
    name: "foo"
  };

  (function(x, y) {
    /* foo x y */
    console.log(this.name, x, y);
  }.call(obj01, "x", "y"));
})();

(function() {
  /*
   * 对于 apply()，第二个参数是一个 array，其每一个 element 会作为 function 的参数传入；
   */
  console.log("\n-------------------------------------------------- 02");

  const obj01 = {
    name: "foo"
  };

  (function(x, y) {
    /* foo x y */
    console.log(this.name, x, y);
  }.apply(obj01, ["x", "y"]));
})();
