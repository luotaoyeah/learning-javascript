/*
 * 9.3 Java-Style Classes in JavaScript
 */

/*
 * Java 中的 class 有四种成员：
 *     1. instance field（实例字段）；
 *     2. instance method（实例方法）；
 *     3. class field（静态字段）；
 *     4. class method（静态方法）；
 *
 * JS 中因为 function 也是对象, 对象的属性和方法没有严格的区分, 即：
 * 如果一个 property 的值是一个 function, 则该 property 称为 method,
 */

/*
 * 在 JS 中定义一个 class 会涉及到 3 个对象：
 *     1. constructor 对象；
 *     2. constructor 的 prototype 属性对象；
 *     3. 实例对象；
 *
 * 其中, constructor 上面的属性可以模拟 Java 中的 class field 和 class method；
 * constructor 的 prototype 属性对象上面的属性, 和实例对象上面的属性,
 * 可以模拟 Java 中的 instance field 和 instance method；
 */

import { extend } from '../../08/08-05/example-8-3';

(function() {
  /*
   * 定义一个 class 可以简化为 3 步：
   *     1. 在 constructor 中设置 instance properties；
   *     2. 在 constructor.prototype 上添加 instance methods；
   *     3. 在 constructor 上添加 class properties 和 class methods；
   */
  console.log("\n-------------------------------------------------- 01");

  /**
   *
   * @param ctor the constructor
   * @param methods instance methods
   * @param statics static properties and static methods
   * @returns {*}
   */
  function defineClass(ctor, methods, statics) {
    if (methods) {
      extend(ctor.prototype, methods);
    }

    if (statics) {
      extend(ctor, statics);
    }

    return ctor;
  }

  const Range = defineClass(
    function(from, to) {
      this.from = from;
      this.to = to;
    },
    {
      includes: function(x) {
        return this.from <= x && x <= this.to;
      },
      toString: function() {
        return "(" + this.from + ", " + this.to + ")";
      }
    },
    {
      /**
       * static method
       * @param to
       * @returns {*}
       */
      upto: function(to) {
        return new Range(0, to);
      }
    }
  );

  /* (3, 6) */
  console.log(new Range(3, 6).toString());
  /* (0, 3) */
  console.log(Range.upto(3).toString());
})();
