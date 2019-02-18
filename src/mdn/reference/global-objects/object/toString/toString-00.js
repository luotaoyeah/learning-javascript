/*
 * Object.prototype.toString()：
 *     返回对象的字符串形式；
 */
console.log("\n-------------------------------------------------- 01");

function Dog(name) {
  this.name = name;
}

Dog.prototype.toString = function() {
  return `My name is ${this.name}.`;
};
const dog01 = new Dog("foo");
/* My name is foo. */
console.log(dog01.toString());
const dog02 = new Dog("bar");
/* My name is bar. */
console.log(dog02.toString());

export {};
