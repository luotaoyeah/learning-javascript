(function () {
  /*
   * 所有的字母和数字会被作为字面量值进行匹配
   * 可以使用 backslash（\）创建转义字符:
   *     \0     NUL 字符
   *     \n     换行（new line）
   *     \r     回车（carriage return）
   *     \t     制表（tab）
   *     \v     垂直制表（vertical tab）
   *     \f     分页（form feed）
   *     \xnn   拉丁字符, nn 表示16进制的数字
   *     \uxxxx unicode 字符, xxxx 表示16进制的数字
   *     \cX    控制字符, X 表示某个字母
   */
})();

(function () {
  /*
   * 某些标点符号没有特殊含义, 即使使用转义, 仍然表示字面含义:
   *      "  '  @
   *     \" \' \@
   *
   * 某些标点符号具有特殊含义:
   *     ^ $ . * + ? = ! | / \ ( ) [ ] { }
   *
   * 其中某些标点符号在特定的语境下才具有特殊含义, 在其他的语境下表示字面含义
   *
   * 对于具有特殊含义的标点符号, 如果想要使用它的字面含义, 通常需要进行转义:
   *     `\^`   `\$`   `\\`
   *
   * 无论是对于有特殊含义的标点, 还是没有特殊含义的标点, 当对它们使用转义时, 都表示字面含义
   */
})();
