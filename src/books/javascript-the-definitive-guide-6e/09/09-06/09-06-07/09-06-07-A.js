/*
 * 9.6.7 Constructor Overloading and Factory Methods
 */

(function() {
  /*
   * 在 constructor 方法中，根据参数类型的不同，执行不同的初始化逻辑，
   * 称之为 constructor overloading；
   */
  console.log("\n-------------------------------------------------- 01");

  /**
   *
   * @constructor
   */
  function List() {
    this.values = [];
    this.n = 0;

    if (arguments.length === 1 && Array.isArray(arguments[0])) {
      this.add.apply(this, arguments[0]);
    } else {
      this.add.apply(this, arguments);
    }
  }

  List.prototype.add = function() {
    for (let i = 0; i < arguments.length; i++) {
      this.values.push(arguments[i]);
      this.n++;
    }
  };

  List.prototype.toString = function() {
    let str = "[ ";

    for (let i = 0; i < this.values.length; i++) {
      if (i > 0) {
        str += ", ";
      }
      str += this.values[i];
    }

    return str + " ]";
  };

  /* [ 1, 3, 6 ] */
  console.log(new List(1, 3, 6).toString());
  /* [ 1, 2, 3 ] */
  console.log(new List([1, 2, 3]).toString());

  const list = new List();
  list.add([1, 2, 3]);
  /* 1 */
  console.log(list.n);
})();
