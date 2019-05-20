/*
 * Modules
 *     Importing
 *         Renaming Identifiers
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 在 export 的时候, 可以使用 as 给要输出的数据重新起一个名字
 */

let name = "FOO";

export { name as NAME };

console.log("\n-------------------------------------------------- 02");

/*
 * 如果 as 后面的名称是 default
 * 表示将该数据作为默认输出
 */

function getSome() {
  console.log("DEFAULT");
}

/*
 * 使用 as 指定新的名称,
 * 因此同一个变量可以输出多次（如：下面的 name）
 */
export { name as NAME02, getSome as default };
