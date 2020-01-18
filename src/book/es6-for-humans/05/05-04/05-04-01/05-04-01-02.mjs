/*
 * Modules
 *     Exporting
 *         Default Exports
 */

console.log('\n-------------------------------------------------- 01');

/*
 * 使用 export default 指定默认输出,
 * 一个 module 最多只能有一个默认输出,
 * 使用默认输出时, 输出的 variable（function, class）可以没有名称
 */
export default function () {
  console.log('DEFAULT EXPORT');
}
