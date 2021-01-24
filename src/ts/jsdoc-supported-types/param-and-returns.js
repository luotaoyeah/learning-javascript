// --------------------------------------------------
// 使用 @param 声明方法参数的类型, 同时指定参数的名称
{
  /**
   *
   * @param { string } p1
   * @param { string } [p2] 可选参数
   * @param { string? } p3 可选参数
   * @param { string? } p4='4' 具有默认值的可选参数
   */
  function fn01(p1, p2, p3, p4 = '4') {
    console.log(p1, p2, p3, p4);
  }
}

// --------------------------------------------------
// 使用 @returns / @returns 声明方法的返回类型
{
  /**
   *
   * @returns { number }
   */
  function fn01() {
    return 0;
  }
}
