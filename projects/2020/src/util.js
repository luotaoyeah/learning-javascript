/**
 * 扩展 Number 类型, 将数字转换为二进制形式的字符串.
 *
 * @param byte {number} 字节个数.
 */
function toBinaryString(byte = 1) {
    let str = this.toString(2).padStart(byte * 8, '0');

    // 每个字节之间, 使用空格分隔
    for (let i = 1; i < byte; i++) {
        const chars = str.split('');
        chars.splice(i * 8, 0, ' ');
        return chars.join('');
    }

    return str;
}

Number.prototype.toBinaryString = toBinaryString;
