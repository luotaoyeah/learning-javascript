/*
 * Example 9-16. A hierarchy of abstract and concrete Set classes
 * TODO
 */

import { defineSubClass } from "../09-07-01/example-9-11";
import { Set } from "../../09-06/09-06-01/example-9-6";

console.log("\n-------------------------------------------------- 01");

/**
 * 抽象方法, 不能直接调用；
 */
function abstractMethod() {
  throw new Error("abstract method");
}

function AbstractSet() {
  throw new Error("cannot instantiate abstract class");
}

AbstractSet.prototype.contains = abstractMethod;
AbstractSet.extend = function(constructor, methods, statics) {
  return defineSubClass(AbstractSet, constructor, methods, statics);
};
