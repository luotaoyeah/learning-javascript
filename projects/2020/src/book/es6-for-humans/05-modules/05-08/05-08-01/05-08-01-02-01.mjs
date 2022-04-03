/*
 * Modules
 *     Common Pitfalls
 *         Read-Only Bindings
 */

console.log('\n-------------------------------------------------- 01');

export let name = 'FOO';

export function change(n) {
  name = n;
}
