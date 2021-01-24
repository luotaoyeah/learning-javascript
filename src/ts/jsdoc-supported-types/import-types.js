/**
 * 使用 typedef 声明类型别名, 原始类型通过 import() 导入.
 *
 * @typedef { import('./types').Pet } MyPet
 */

// --------------------------------------------------
//
{
  /** @type { import('./types').Pet } */
  let v1;

  /**
   *
   * @param { import('./types').Pet } p
   * @return { void }
   */
  function fn01(p) {
    console.log(p.name);
  }

  /**
   *
   * @param { MyPet } p
   * @return { number }
   */
  function fn02(p) {
    console.log(p.name);
    return 0;
  }
}
