describe('src/book/you-dont-know-js/es6-beyond/07-meta-programming/proxies/proxies.test.js', () => {
    /*----------------------------------------------------------------------------------------------------
     * 某些 handler 的默认实现，会调用其他的 handler，
     * 比如 set()   的默认实现，会调用 getOwnPropertyDescriptor() 和 defineProperty()，
     *----------------------------------------------------------------------------------------------------*/
    it('01', () => {
        const obj = {};

        const expected = [];
        const proxy = new Proxy(obj, {
            getOwnPropertyDescriptor(target, p) {
                expected.push('getOwnPropertyDescriptor()');
                return Reflect.getOwnPropertyDescriptor(target, p);
            },
            defineProperty(target, p, attributes) {
                expected.push('defineProperty()');
                return Reflect.defineProperty(target, p, attributes);
            },
        });

        proxy.prop01 = 666;
        expect(expected).toEqual(['getOwnPropertyDescriptor()', 'defineProperty()']);
    });
});
