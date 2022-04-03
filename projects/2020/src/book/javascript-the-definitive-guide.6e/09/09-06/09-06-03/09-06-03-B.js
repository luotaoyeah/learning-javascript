(function() {
  /*
   * Object.prototype.toLocaleString()
   *     跟 Object.prototype.toString() 类似,
   *     区别在于：会根据当前 locale 返回不同形式的字符串；
   *
   *     默认的 toLocaleString() 是直接调用的 toString() 方法；
   */
  console.log("\n-------------------------------------------------- 01");

  /* [object Object] */
  console.log({}.toLocaleString());

  const obj01 = {
    toString() {
      return "foo";
    }
  };

  /* foo */
  console.log(obj01.toLocaleString());
})();
