describe('src/book/es6-for-humans/02/05/02/tagged-template-literals.js', () => {
  /*----------------------------------------------------------------------------------------------------
   * template literal 前面加上函数名，称之为 tagged template literal，
   * tagged template literal 本质上是一个函数调用，
   *----------------------------------------------------------------------------------------------------*/
  it('01', () => {
    /*----------------------------------------------------------------------------------------------------
     * 以 template literal 中的 substitution 作为分隔，
     *   第一个参数为所有的 string literal 组成的数组，
     *   第二个参数开始为所有的 substitution，
     * string literal 始终比 substitution 多一个，类似于 String.prototype.split() 的结果，
     *----------------------------------------------------------------------------------------------------*/
    function fn01(literals, ...values) {
      return literals.join('') + values.join('');
    }

    const str01 = fn01(['1', '3', '5'], 2, 4);
    expect(str01).toEqual('13524');

    const str02 = fn01`1${2}3${4}5`;
    expect(str02).toEqual('13524');
  });
});
