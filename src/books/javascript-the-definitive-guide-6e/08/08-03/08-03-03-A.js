/*
 * 8.3.3 Using Object Properties as Arguments
 */
(function() {
  /*
   * 如果 function 的参数比较多，可以将 function 的参数列表声明为一个对象，
   * 用对象的每一个属性分别表示每一个参数；
   * 这样就不用关心参数的顺序，且可以给任意某些参数设置默认值；
   */
  console.log("\n-------------------------------------------------- 01");

  (function fn01(x, y, z) {
    console.log(x, y, z);
  })("x", "y", "z");

  (function fn02(obj) {
    console.log(obj.x, obj.y || "y", obj.z);
  })({
    x: "x",
    z: "z"
  });
})();
