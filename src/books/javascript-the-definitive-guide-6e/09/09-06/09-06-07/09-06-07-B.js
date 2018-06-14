(function() {
  /*
   * 将方法直接定义在 class 上（静态方法），同时方法返回该 class 的实例对象，
   * 这些方法称之为 factory methods；
   */
  console.log("\n-------------------------------------------------- 01");

  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  function Student(name, score) {
    this.name = name;
    this.score = score;
  }

  Person.fromStudent = function(student) {
    return new Person(student.name, 18);
  };

  Person.adult = function() {
    return new Person("bar", 20);
  };

  /* Person { name: 'foo', age: 18 } */
  console.log(Person.fromStudent(new Student("foo", 99)));
  /* Person { name: 'bar', age: 20 } */
  console.log(Person.adult());
})();
