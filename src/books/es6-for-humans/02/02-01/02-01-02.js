/*
 * New Syntax in ES6
 *     Variable Declarations: let, const, and Block Scoping
 *         More on Temporal Dead Zones
 */

/*
 * 使用 var 创建的变量，存在hoist的机制，所有变量的声明都会提升到作用域的顶部；
 * 使用 let 创建的变量，存在 TDZ 的机制，所有变量的声明都会在作用域的顶部创建一个内存绑定（memory binding），
 * 在直到变量的声明语句之前，都不能访问该变量；
 */
console.log("\n-------------------------------------------------- 01");
let data = true;
if (true) {
  /*
   * 块级作用域开始，即 TDZ 开始；
   */

  /*
    console.log(data); // ReferenceError: data is not defined
  */

  /*
   * 变量声明之后，该变量的 TDZ 结束；
   */
  let data;
}
console.log(data);

/*
 * 当变量处于 TDZ 时，对变量使用 typeof 也会报错；
 */
console.log("\n-------------------------------------------------- 02");

{
  /*
   * 在该作用域内，变量 m 没有使用 let 或者 const 声明，因此此时 m 不处于 TDZ；
   */
  console.log(typeof m); // undefined
  /*
    console.log(typeof n); // ReferenceError: n is not defined
  */
  let n;
}

/*
 * 使用 const 声明的变量不能重新赋值，但是如果该变量是一个对象，
 * 则该对象的属性仍然可以被修改；
 */
console.log("\n-------------------------------------------------- 03");

{
  const obj = { name: "foo" };
  obj.age = "foo";
  delete obj.name;
  console.log(obj); // { age: 'foo' }
  /*
    obj = {}; // TypeError: Assignment to constant variable
  */
}
