describe('src/book/you-dont-know-js/es6-beyond/07-meta-programming/reflect-api/01.js', () => {
  /*----------------------------------------------------------------------------------------------------
   * 类似 Math 对象，Reflect 包含多个静态方法，
   * 其中有些方法跟 Object 上的同名方法功能类似，但具体实现上有区别，
   * Reflect 的方法跟 Proxy 的 handler 方法一一对应，Proxy 每个 handler 的默认实现就是直接调用对应的 Reflect 方法，
   *----------------------------------------------------------------------------------------------------*/

  it('should work 01', () => {
    const obj = { prop01: 666, [Symbol()]: 888 };
    expect(Reflect.ownKeys(obj)).toEqual([...Object.getOwnPropertyNames(obj), ...Object.getOwnPropertySymbols(obj)]);
  });
});
