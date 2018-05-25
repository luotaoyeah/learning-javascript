/*
 * Object.prototype.toLocaleString()：
 *     返回对象的本地化的字符串形式；
 */

/*
 * 默认的 Object.prototype.toLocaleString() 直接调用 toString() 方法；
 */
console.log("\n-------------------------------------------------- 01");
function Foo(name) {
  this.name = name;
}

Foo.prototype.toString = function() {
  return JSON.stringify({ name: this.name });
};
/* {"name":"tom"} */
console.log(new Foo("tom").toString());
/* {"name":"tom"} */
console.log(new Foo("tom").toLocaleString());

export {};
