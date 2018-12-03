/*
 * Modules
 *     Exporting
 *         Default Exports
 */

console.log("\n-------------------------------------------------- 01");

/*
 * 可以同时指定 named export 和 default export
 */

export let name = "FOO";
export let age = 18;

export default function() {
  console.log("DEFAULT");
}
