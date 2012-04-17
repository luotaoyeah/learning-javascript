// primitive-wrapper-types

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 原始类型都有对应的包装类型:
  //   1. string 的包装类是 String
  //   2. number 的包装类是 Number
  //   3. boolean 的包装类是 Boolean
  //
  // 当我们访问原始类型的属性或方法时, 会自动创建对应的包装类型实例,
  // 访问完成之后, 会立刻销毁包装类型实例,
  // 这个过程是自动的, 而且是一次性的

  var str = 'foo';

  // 如下, 两次访问 name 属性, 会分别执行两次 "创建包装实例/访问/销毁包装实例" 这个步骤,
  // 每次访问所对应的包装实例是不一样的
  str.name = 'foo';
  console.assert(str.name === undefined);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 也可以显式地创建包装类型实例, 它们是真正的引用类型

  var str01 = 'foo';
  console.assert(typeof str01 === 'string');
  str01.name = 'foo';
  console.assert(str01.name === undefined);

  var str02 = new String('foo');
  console.assert(typeof str02 === 'object');
  str02.name = 'foo';
  console.assert(str02.name === 'foo');
})();
