import '../../../../util';

describe('book/professional-javascript-for-web-developers.4e/06/03.typed-arrays/DataView.test.js', () => {
    it('01', () => {
        const arrayBuffer = new ArrayBuffer(16);
        const dataView01 = new DataView(arrayBuffer);

        // DataView.byteOffset 默认为 0
        // DataView.byteLength 默认为从 DataView.byteOffset 到最后
        expect(dataView01.byteOffset).toBe(0);
        expect(dataView01.byteLength).toBe(16);
        expect(dataView01.buffer).toBe(arrayBuffer);

        const dataView02 = new DataView(arrayBuffer, 8);
        expect(dataView02.byteOffset).toBe(8);
        expect(dataView02.byteLength).toBe(8);
    });

    it('02', () => {
        const arrayBuffer = new ArrayBuffer(2);
        const dataView = new DataView(arrayBuffer);

        // getInt8(0) 表示从位置 0 开始读取 8 位
        expect(dataView.getInt8(0).toBinaryString(1)).toBe('00000000');

        // getInt8(1) 表示从位置 1 开始读取 8 位
        expect(dataView.getInt8(1).toBinaryString(1)).toBe('00000000');

        // getInt16(0) 表示从位置 0 开始读取 16 位
        expect(dataView.getInt16(0).toBinaryString(2)).toBe('0000000000000000');

        dataView.setUint8(1, 0b11111111);

        expect(dataView.getUint8(1).toBinaryString(1)).toBe('11111111');
        expect(dataView.getUint16(0).toBinaryString(2)).toBe('0000000011111111');
    });
});
