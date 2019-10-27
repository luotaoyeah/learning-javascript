(function () {
  /*
   * 所有的 regexp 都是 `RegExp` 类的实例对象,
   * 可以使用 `new RegExp()` 的方式来创建一个 regexp 对象
   */

  const str = 'javascript JAVASCRIPT';
  const regExp = new RegExp('javascript', 'gi');

  console.assert(regExp instanceof RegExp);
  console.assert(JSON.stringify(str.match(regExp)) === JSON.stringify(['javascript', 'JAVASCRIPT']));
})();

(function () {
  /*
   * 除了可以使用构造函数 `RegExp()` 来创建,
   * 还可以使用字面量的方式来创建
   */

  const str = 'javascript JAVASCRIPT';
  const regExp = /javascript/gi;

  console.assert(regExp instanceof RegExp);
  console.assert(JSON.stringify(str.match(regExp)) === JSON.stringify(['javascript', 'JAVASCRIPT']));
})();
