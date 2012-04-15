// functions-as-values

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // function 本质上是一个 object, 可以作为函数参数, 可以作为函数的返回值

  function compareBy(key) {
    return function (x, y) {
      if (x[key] < y[key]) {
        return -1;
      } else if (x[key] === y[key]) {
        return 0;
      }
      return 1;
    };
  }

  var objects = [
    {
      id: '01',
      x: 1,
      y: 2,
    },
    {
      id: '02',
      x: 2,
      y: 1,
    },
  ];

  objects.sort(compareBy('x'));
  console.assert(
    JSON.stringify(
      objects.map(function (i) {
        return i.id;
      }),
    ) === JSON.stringify(['01', '02']),
  );

  objects.sort(compareBy('y'));
  console.assert(
    JSON.stringify(
      objects.map(function (i) {
        return i.id;
      }),
    ) === JSON.stringify(['02', '01']),
  );
})();
