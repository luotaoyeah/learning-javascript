import '../../../../util';

describe('book/professional-javascript-for-web-developers.4e/06/03.typed-arrays/Int32Array.test.js', () => {
    /**
     * 构造方式一: 从一个 ArrayBuffer 构造一个 Int32Array.
     */
    it('01', () => {
        const arrayBuffer = new ArrayBuffer(12);
        const int32Array = new Int32Array(arrayBuffer);

        expect(int32Array.buffer).toBe(arrayBuffer);
        expect(int32Array.byteOffset).toBe(0);
        expect(int32Array.byteLength).toBe(12);
        expect(int32Array.length).toBe(3);
        expect(int32Array.length).toBe(int32Array.byteLength / int32Array.BYTES_PER_ELEMENT);
    });

    /**
     * 构造方式二: 指定元素个数 ( Int32Array.length ).
     */
    it('02', () => {
        const int32Array = new Int32Array(6);
        expect(int32Array.length).toBe(6);
        expect(int32Array.BYTES_PER_ELEMENT).toBe(4);
        expect(int32Array.byteLength).toBe(24);
        expect(int32Array.byteLength).toBe(int32Array.length * Int32Array.BYTES_PER_ELEMENT);
    });

    /**
     * 其他构造方式.
     */
    it('03', () => {
        const int32Array01 = Int32Array.from([1, 2, 3, 4]);
        const int32Array02 = Int32Array.of(1, 2, 3, 4);
        const int32Array03 = new Int32Array(int32Array01);

        expect(int32Array01.length).toBe(int32Array02.length);
        expect(int32Array02.length).toBe(int32Array03.length);
    });
});
