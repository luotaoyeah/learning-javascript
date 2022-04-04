/**
 * 扩展 Number 类型, 将数字转换为二进制形式的字符串.
 *
 * @param byte {number} 字节个数.
 */
function toBinaryString(byte = 1) {
    return this.toString(2).padStart(byte * 8, '0');
}

Number.prototype.toBinaryString = toBinaryString;
