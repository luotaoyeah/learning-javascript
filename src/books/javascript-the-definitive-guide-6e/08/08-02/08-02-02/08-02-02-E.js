(function() {
  /*
   * this 是一个 keyword，不是一个 variable，不能赋值给 this；
   */
  console.log("\n-------------------------------------------------- 01");

  const obj01 = {
    fn01: function() {
      /*
            /!* Error: Assigning to rvalue *!/
            this = {};
      */
    }
  };
})();

(function() {
  /*
   * inner function 不会继承 outer function 的 this；
   * 如果一个 inner function 是作为 method 调用，则它的 this 为调用它的对象；
   * 如果一个 inner function 是作为 function 调用，则它的 this 为 undefined（strict mode）或者全局对象；
   */
  console.log("\n-------------------------------------------------- 02");

  const obj01 = {
    fn01: function() {
      /* true */
      console.log(this === obj01);
      const obj02 = {
        fn02: function() {
          /* true */
          console.log(this === obj02);
        }
      };
      obj02.fn02();

      function fn03() {
        /* global */
        console.log(this);
      }

      fn03();
    }
  };

  obj01.fn01();
})();

(function() {
  /*
   * 可以将 outer function 的 this 赋值给一个 variable，
   * 因为 inner function 可以访问 outer function 中的 variable，
   * 因此 inner function 可以通过该 variable 访问 outer function 的 this；
   */
  console.log("\n-------------------------------------------------- 03");

  const obj01 = {
    fn01: function() {
      const _this = this;

      (function() {
        /* true */
        console.log(_this === obj01);
      })();
    }
  };

  obj01.fn01();
})();
