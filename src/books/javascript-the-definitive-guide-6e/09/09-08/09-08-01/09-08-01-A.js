/*
 * 9.8.1 Making Properties Non-enumerable
 */

(function() {
  /*
   * 使用 constructor 实例化的对象，其属性默认是 enumerable 的；
   */
  console.log("\n-------------------------------------------------- 01");

  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  Person.prototype.walk = function() {
    console.log("Person.walk()");
  };

  const person = new Person("foo", 18);

  const keys = [];
  for (let key in person) {
    keys.push(key);
  }
  /* [ 'name', 'age', 'walk' ] */
  console.log(keys);
})();
