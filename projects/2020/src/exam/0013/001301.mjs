(function() {
  Function.prototype.bind01 = function() {
    const fn = this;
    if (typeof fn !== "function") {
      throw new TypeError("bound target is not a function");
    }

    const thisArg = arguments[0];
    const args = Array.prototype.slice.call(arguments, 1);

    return function() {
      args.push.apply(args, arguments);
      return fn.apply(thisArg, args);
    };
  };
})();

(function() {
  Function.prototype.bind02 = function() {
    const fn = this;
    if (typeof fn !== "function") {
      throw new TypeError("bound target is not a function");
    }

    const thisArg = arguments[0];
    const args = Array.prototype.slice.call(arguments, 1);

    return function() {
      /*
       * 使用 Array.from() 将 array-like object 转换为 array
       */
      return fn.apply(thisArg, [...args, ...Array.from(arguments)]);
    };
  };
})();

const obj = {
  name: "foo"
};

function fn01(x, y) {
  console.log(this.name, x + y);
}

fn01.bind(obj, 1)(2); // foo 3
fn01.bind01(obj, 1)(2); // foo 3
fn01.bind02(obj, 1)(2); // foo 3

export {};
