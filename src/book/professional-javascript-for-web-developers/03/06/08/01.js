// the-with-statement

(function () {
  // ----------------------------------------------------------------------------------------------------
  // NON-STRICT 模式下,
  // `with` 用来将某个对象指定为某个代码块的上下文

  var obj = {
    x: 1,
    y: 2,
    z: 3,
  };
  console.assert(obj.x === 1);
  console.assert(obj.y === 2);
  console.assert(obj.z === 3);

  with (obj) {
    console.assert(x === 1);
    console.assert(y === 2);
    console.assert(z === 3);
  }
})();
