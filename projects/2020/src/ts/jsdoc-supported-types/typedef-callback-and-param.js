// --------------------------------------------------
// 使用 @typedef 声明类型别名
{
  /**
   * @typedef { (p1: number) => void } Action
   * @typedef { (p1: number, p2: string) => boolean } Func
   */

  /**
   *
   * @param { Action } cb
   */
  function fn01(cb) {
    cb(0);
  }
}
