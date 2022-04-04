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
});
