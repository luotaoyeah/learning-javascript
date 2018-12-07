/*
 * Symbols in ES6
 *     Symbols
 */

console.log("\n-------------------------------------------------- 01");
/*
 * symbol 可以用来模拟 class 的私有属性
 */

const symbol = Symbol("age");

class Person {
  constructor(age) {
    this[symbol] = age;
  }

  getAge() {
    return this[symbol];
  }
}

const person = new Person(99);
console.log(person); // Person { [Symbol(age)]: 99 }
console.log(person.age); // undefined
console.log(person.getAge()); // 99
console.log(Object.getOwnPropertySymbols(person)); // [ Symbol(age) ]
console.log(person[Object.getOwnPropertySymbols(person)[0]]); // 99

export { Person };
