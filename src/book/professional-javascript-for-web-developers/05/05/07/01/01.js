// the-global-object
// uri-encoding-methods

'use strict';

// JS 代码中始终存在一个全局对象,
// 所有定义在 global scope 中的变量和函数, 实际上都是定义到这个全局对象上的属性和方法,
// 在浏览器中,  可以通过 `window` 对象访问这个全局对象,
// 在 node 中, 可以通过 `global` 对象访问这个全局对象

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `encodeURI()` 和 `encodeURIComponent()` 的区别:
  //   1. `encodeURIComponent()` 会编码所有特殊字符
  //   2. `encodeURI()`          只编码部分特殊字符 (比如 `:/+=&?` 不会被编码)
  //
  // 在 URI 中, 有一些字符只有在特定的位置才合法, 在其他的位置不合法, 比如 `:/+=&?`
  // 这样的字符总共有 11 个, 下面的代码找出了这些字符

  var chars = [];
  for (var i = 0; i < 256; i++) {
    var char = String.fromCharCode(i);
    var str01 = encodeURI(char);
    var str02 = encodeURIComponent(char);

    if (str01 !== str02) {
      chars.push({
        char: char,
        encoded: str02,
      });
    }
  }
  console.assert(
    JSON.stringify(chars) ===
      JSON.stringify([
        { char: '#', encoded: '%23' },
        { char: '$', encoded: '%24' },
        { char: '&', encoded: '%26' },
        { char: '+', encoded: '%2B' },
        { char: ',', encoded: '%2C' },
        { char: '/', encoded: '%2F' },
        { char: ':', encoded: '%3A' },
        { char: ';', encoded: '%3B' },
        { char: '=', encoded: '%3D' },
        { char: '?', encoded: '%3F' },
        { char: '@', encoded: '%40' },
      ]),
  );
})();
