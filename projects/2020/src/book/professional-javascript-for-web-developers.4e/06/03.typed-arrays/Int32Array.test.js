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

    /**
     * Int32Array.set(), 批量修改元素的值, 设置某个范围内的元素的值.
     */
    it('04', () => {
        const int32Array = new Int32Array(8);

        // 将第 0/1/2/3 个元素的值分别设置为 1,2,3,4
        int32Array.set([1, 2, 3, 4]);
        expect(int32Array.toString()).toEqual('1,2,3,4,0,0,0,0');

        // 将第 4/5/6/7 个元素的值分别设置为 5,6,7,8
        int32Array.set([5, 6, 7, 8], 4);
        expect(int32Array.toString()).toEqual('1,2,3,4,5,6,7,8');
    });

    /**
     * Int32Array.subarray(), 从原数组构造一个子数组.
     * 注意: 子数组跟原数组共用同一个 ArrayBuffer, 因此子数组修改数据之后, 原数组对应的数据也会变更, 反之亦然.
     */
    it('05', () => {
        const int32Array01 = new Int32Array(8);
        int32Array01.set([1, 2, 3, 4, 5, 6, 7, 8]);
        expect(int32Array01.toString()).toBe('1,2,3,4,5,6,7,8');

        const int32Array02 = int32Array01.subarray(2, 4);
        expect(int32Array02.buffer).toBe(int32Array01.buffer);
        expect(int32Array02.toString()).toBe('3,4');

        int32Array02.set([0, 0]);
        // 子数组修改了元素的值, 原数组对应的元素也变了
        expect(int32Array02.toString()).toBe('0,0');
        expect(int32Array01.toString()).toBe('1,2,0,0,5,6,7,8');
    });
});
