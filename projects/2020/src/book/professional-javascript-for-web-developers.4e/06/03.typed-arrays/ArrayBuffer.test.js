describe('book/professional-javascript-for-web-developers.4e/06/03.typed-arrays/ArrayBuffer.test.js', () => {
    /**
     * ArrayBuffer 不能直接读写, 需要使用 DataView 进行读写.
     * 所有的 DataView / Typed Array 底层都是使用 ArrayBuffer 来存储数据.
     */
    it('01', () => {
        // 构造时, 指定字节长度
        const arrayBuffer = new ArrayBuffer(4);

        // 使用 ArrayBuffer.byteLength 属性, 获取字节长度
        // 该属性是只读的
        expect(arrayBuffer.byteLength).toBe(4);
    });

    /**
     * ArrayBuffer 创建之后就不能改变长度,
     * 可以使用 ArrayBuffer.slice() 方法复制 ArrayBuffer 的一部分, 生成一个新的 ArrayBuffer.
     */
    it('02', () => {
        const arrayBuffer01 = new ArrayBuffer(8);
        expect(arrayBuffer01.byteLength).toBe(8);

        const arrayBuffer02 = arrayBuffer01.slice(2, 4);
        expect(arrayBuffer02.byteLength).toBe(2);
    });
});
