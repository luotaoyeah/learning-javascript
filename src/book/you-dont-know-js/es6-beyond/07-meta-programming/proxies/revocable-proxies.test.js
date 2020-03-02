describe('src/book/you-dont-know-js/es6-beyond/07-meta-programming/proxies/revocable-proxies.js', () => {
  it('should work 01', () => {
    const { proxy, revoke } = Proxy.revocable(
      { prop01: 666 },
      {
        get(target, p, receiver) {
          return Reflect.get(target, p, receiver);
        },
      },
    );

    expect(proxy.prop01).toBe(666);

    /*----------------------------------------------------------------------------------------------------
     * 调用 revoke() 之后，如果再使用 proxy 对象就会报错，
     *----------------------------------------------------------------------------------------------------*/
    revoke();
    expect(() => proxy.prop01).toThrowError(TypeError);
  });
});
