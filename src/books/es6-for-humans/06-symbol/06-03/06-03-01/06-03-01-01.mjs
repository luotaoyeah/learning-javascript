/*
 * Symbols in ES6
 *     Symbol.for()
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 可以将 symbol 添加到全局注册中心（global symbol registry），
 * 注册中心里面的所有 symbol 都可以被其他地方共享
 */

/*
 * 使用 Symbol.for() 方法，根据 key 从注册中心获取对应的 symbol，
 * 如果对应的 symbol 不存在，则创建一个并添加到注册中心，然后返回
 */

console.log(Symbol.for("FOO") === Symbol.for("FOO")); // true
const symbol = Symbol.for("BAR BAZ");
console.log(symbol); // Symbol(BAR BAZ)
