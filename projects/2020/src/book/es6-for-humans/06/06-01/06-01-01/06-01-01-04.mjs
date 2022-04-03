/*
 * Symbols in ES6
 *     Symbols
 */

console.log('\n-------------------------------------------------- 01');
/*
 * 任何两个 symbol 都不会相等
 */

console.log(Symbol() == Symbol()); // false
console.log(Symbol() === Symbol()); // false
