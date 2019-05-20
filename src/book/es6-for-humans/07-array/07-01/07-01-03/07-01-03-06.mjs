/*
 * Arrays and Collections
 *     Array.prototype.find()
 */

console.log("\n-------------------------------------------------- 01");
/*
 * Array.prototype.find() 方法第二个参数用来指定 this 对象
 */

function Foo() {
  this.age = 18;
  console.log(
    [10, 12, 23, 26, 32].find(function(value) {
      return value > this.age;
    }, this)
  );
}

new Foo(); // 23

export {};
