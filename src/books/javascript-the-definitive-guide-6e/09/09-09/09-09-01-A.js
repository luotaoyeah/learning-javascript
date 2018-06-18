/*
 * 9.9.1 Objects as Namespaces
 */

/*
 * 为了避免在 module 中创建过多的全局变量，
 * 通常可以使用一个专门的对象，将 module 中的变量都定义为这个对象的属性，
 * 然后只将这个对象暴露为全局变量；
 */
console.log("\n-------------------------------------------------- 01");

var sets = {};

sets.AbstractSet = function() {
  /*  */
};

sets.StringSet = function() {
  /*  */
};

sets.SingletonSet = function() {
  /*  */
};

/*
 * 为了避免命名冲突，通常可以采用多层嵌套的属性作为命名空间，
 * 比如：com.google.structs.sets；
 * 同时代码的目录结构会跟命名空间保持一致，即目录结构为：
 * com/google/structs/sets.js；
 */
console.log("\n-------------------------------------------------- 02");

var com;
if (!com) {
  com = {};
}
if (!com.google) {
  com.google = {};
}

if (!com.google.structs) {
  com.google.structs = {};
}

com.google.structs.sets = {};
com.google.structs.sets.StringSet = function() {
  /*  */
};
