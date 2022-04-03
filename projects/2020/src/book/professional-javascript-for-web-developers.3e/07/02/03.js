// the-this-object

(function () {
  // ----------------------------------------------------------------------------------------------------
  // function 中的 this 是在运行时确定的, closure 中的 this 有一些特殊的特性

  var obj = {
    x: 1,
    fn01: function () {
      return this.x;
    },
    fn02: function () {
      return function () {
        return this.x;
      };
    },
  };

  console.assert(obj.fn02()() === undefined);
  console.assert(obj.fn02().call(obj) === 1);

  console.assert(obj.fn01() === 1);
  // 赋值表达式的结果为右侧的值, 下面的代码等价于:
  //   var fn01 = obj.fn01;
  //   fn01();
  console.assert((obj.fn01 = obj.fn01)() === undefined);
})();
