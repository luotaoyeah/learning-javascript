// private-variables

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 使用 closure 来模拟私有属性

  function Person(name, age) {
    var _name;

    this.getName = function () {
      return _name;
    };

    this.setName = function (value) {
      _name = value;
    };

    this.age = age;
    this.setName(name);
  }

  var person = new Person('foo', 18);
  console.assert(person.age === 18);
  console.assert(person.name === undefined);
  console.assert(person.getName() === 'foo');
})();
