describe('src/book/you-dont-know-js/es6-beyond/07-meta-programming/reflect-api/property-ordering.test.js', () => {
  /*----------------------------------------------------------------------------------------------------
   * Reflect.ownKeys() / Object.getOwnPropertyNames() / Object.getOwnPropertySymbols() 返回的属性名的顺序，
   * 在规范中明确定义如下：
   *   1. 类型为 number 的属性名，按照数字大小顺序；
   *   2. 类型为 string 的属性名，按照属性创建顺序；
   *   3. 类型为 symbol 的属性名，按照属性创建顺序；
   *----------------------------------------------------------------------------------------------------*/
  it('should work 01', () => {
    const symbol01 = Symbol();
    const obj = {};

    obj[symbol01] = 666;

    obj['b'] = 'b';
    obj['a'] = 'a';

    obj[2] = 2;
    obj[1] = 1;

    expect(Reflect.ownKeys(obj)).toEqual(['1', '2', 'b', 'a', symbol01]);
  });
});
