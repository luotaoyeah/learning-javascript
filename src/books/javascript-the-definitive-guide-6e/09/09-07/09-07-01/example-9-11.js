/*
 * Example 9-11. Subclass definition utilities
 */

import { inherit } from "../../../06/06-01/06-01-04/example-6-1";
import { extend } from "../../../08/08-05/example-8-3";

/*
   *
   */
console.log("\n-------------------------------------------------- 01");

/**
 * 定义子类
 * @param superClass 父类
 * @param constructor 子类的 constructor
 * @param methods 实例方法
 * @param statics 静态方法
 * @return {*}
 */
function defineSubClass(superClass, constructor, methods, statics) {
  constructor.prototype = inherit(superClass.prototype);
  constructor.prototype.constructor = constructor;

  if (methods) {
    extend(constructor.prototype, methods);
  }

  if (statics) {
    extend(constructor, statics);
  }

  return constructor;
}

function A() {}

A.prototype.a = "a";
A.prototype.extend = function(constructor, methods, statics) {
  return defineSubClass(A, constructor, methods, statics);
};

function B() {}

const B02 = new A().extend(B, {
  c: function() {
    return "c";
  }
});

const b02 = new B02();
/* a */
console.log(b02.a);
/* c */
console.log(b02.c());

export { defineSubClass };
