// problems-with-constructors

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // constructor 有一个问题:
  //   如果属性的值是函数, 则每个实例的该属性的值, 都是不同的函数对象

  function Person() {
    this.run = function () {
      return 'running';
    };
  }

  var person01 = new Person();
  var person02 = new Person();

  console.assert(person01.run !== person02.run);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 为了解决这个问题, 我们可以将函数定义在 constructor 外面, 然后在 constructor 里面引用这个函数,
  // 这样每个实例都会共用这个函数

  function run() {
    return 'running';
  }

  function Person() {
    this.run = run;
  }

  var person01 = new Person();
  var person02 = new Person();

  console.assert(person01.run === person02.run);
})();
