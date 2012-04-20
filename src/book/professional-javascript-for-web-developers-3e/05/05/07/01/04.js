// global-object-properties

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 全局对象上的属性

  console.assert('undefined' in global);
  console.assert('NaN' in global);
  console.assert('Infinity' in global);

  console.assert('Object' in global);
  console.assert('Number' in global);
  console.assert('String' in global);
  console.assert('Boolean' in global);
  console.assert('Function' in global);
  console.assert('Array' in global);
  console.assert('Date' in global);
  console.assert('RegExp' in global);

  console.assert('Error' in global);
  console.assert('TypeError' in global);
  console.assert('SyntaxError' in global);
  console.assert('ReferenceError' in global);
  console.assert('EvalError' in global);
  console.assert('RangeError' in global);
  console.assert('URIError' in global);
})();
