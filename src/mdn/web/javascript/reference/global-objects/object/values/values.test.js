describe('src/mdn/web/javascript/reference/global-objects/object/values/values.js', () => {
  /*----------------------------------------------------------------------------------------------------
   * Object.values() 返回 own enumerable property values 组成的数组，
   *----------------------------------------------------------------------------------------------------*/
  it('01', () => {
    const obj01 = {
      x: 666,
      y: '888',
    };

    expect(Object.values(obj01)).toEqual([666, '888']);
  });
});
