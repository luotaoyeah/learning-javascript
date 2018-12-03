/*
 * Modules
 *     Exporting
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 使用 export 关键字指定可以被外界访问的数据（输出），
 * 可以是 variable，function，class
 * 可以在声明 variable（function，class）的同时进行输出
 */

export var x = 1;
export let y = 2;
export const z = 3;

export function getSome() {}

export class Person {}

console.log("\n-------------------------------------------------- 02");
/*
 * 也可以先声明，再输出
 */

let name = "foo";

function getMore() {
  console.log('more');
}

class Boy {}

export { name, getMore, Boy };
