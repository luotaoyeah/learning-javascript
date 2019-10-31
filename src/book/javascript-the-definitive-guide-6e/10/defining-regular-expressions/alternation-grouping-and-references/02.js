(function () {
  /*
   * 使用 `()` 来声明一个分组(group), 每一个分组也称为一个子句(clause),
   * 分组的第一个作用是:
   *   将分组中的规则看作一个整体
   */

  const str = '_1_2_33_44';

  console.assert(JSON.stringify(str.match(/_\d{2}/g)) === JSON.stringify(['_33', '_44']));
  console.assert(JSON.stringify(str.match(/(_\d){2}/g)) === JSON.stringify(['_1_2']));
})();
