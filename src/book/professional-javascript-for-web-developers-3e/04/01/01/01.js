// dynamic-properties

'use strict';

// primitive type: null/undefined/string/number/boolean
// reference type: object

(function () {
  // ----------------------------------------------------------------------------------------------------
  // object 可以动态添加任意属性

  var obj = new Object();
  obj.name = 'foo';
  console.assert(obj.name === 'foo');
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // primitive type 添加属性运行报错

  try {
    var x = '';
    x.name = 'foo';
  } catch (e) {
    console.assert(e instanceof TypeError);
    console.assert(e.message === "Cannot create property 'name' on string ''");
  }
})();
