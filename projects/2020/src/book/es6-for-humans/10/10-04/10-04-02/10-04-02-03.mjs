/*
 * Meta Programming
 *     Revocable Proxy
 *         Reflect
 *             Reflect.apply()
 */

console.log('\n-------------------------------------------------- 01');
const obj = { name: 'FOO' };
function doSomething() {
  return this.name;
}

console.log(doSomething.apply(obj)); // FOO
console.log(Function.prototype.apply.call(doSomething, obj)); // FOO
console.log(Reflect.apply(doSomething, obj, [])); // FOO

export {};
