/*
 * New Syntax in ES6
 *     Arrow Functions
 */

/*
 * 箭头函数是一种新的语法，用来声明一个函数；
 */
console.log("\n-------------------------------------------------- 01");

/*
 * 箭头左边表示函数的参数，
 *     如果只有一个参数，可以省略小括号，
 *     如果没有参数，或者不止一个参数，则小括号不能省略；
 *
 * 箭头右边
 *     如果用花括号括起来，表示函数体，
 *     如果没有花括号括起来，表示函数的返回值；
 */
const fn01 = x => x * x;

/* 等价于 */
function fn02(x) {
  return x * x;
}

console.log(fn01(9)); // 81
console.log(fn02(9)); // 81

/*
 * 如果箭头函数的右边使用花括号包裹起来，则箭头右边表示函数体，
 * 此时，在函数体中必须显式调用 return 语句；
 */
console.log("\n-------------------------------------------------- 02");
const getPrice01 = (qty, tax) => {
  let price = qty * 5;
  price = price * (1 + tax);
  return price;
};
/* 等价于 */
const getPrice02 = (qty, tax) => qty * 5 * (1 + tax);

console.log(getPrice01(5, 0.04)); // 26
console.log(getPrice02(5, 0.04)); // 26

/*
 * 如果箭头函数右边使用花括号包裹起来，则箭头右边表示函数体，
 * 此时，若花括号实际表示的是对象字面量的话，则该对象字面量必须使用小括号括起来，以免引起歧义；
 */
console.log("\n-------------------------------------------------- 03");

const getPerson = () => ({ name: "foo", age: 18 });
console.log(getPerson()); // { name: 'foo', age: 18 }
