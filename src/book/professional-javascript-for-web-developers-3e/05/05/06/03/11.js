// string-pattern-matching-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `String.prototype.localeCompare()` 比较两个字符串的字符顺序,
  // 如果在参数字符串的前面, 返回 < 0
  // 如果在参数字符串的后面, 返回 > 0
  // 如果跟参数字符串相同, 返回 0

  console.assert('foo'.localeCompare('foo') === 0);
  console.assert('foo'.localeCompare('bar') > 0);
  console.assert('foo'.localeCompare('jav') < 0);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 模拟实现

  String.prototype.localeCompare02 = function (target) {
    var source = this;

    if (target === null || target === undefined) {
      return 1;
    }

    if (source === target) {
      return 0;
    }

    function compareCharCode(_source, _target, index) {
      var _sourceChar = _source.charCodeAt(index);
      var _targetChar = _target.charCodeAt(index);

      if (_sourceChar === undefined && _targetChar === undefined) {
        return 0;
      } else if (_sourceChar === undefined && _targetChar !== undefined) {
        return -1;
      } else if (_sourceChar !== undefined && _targetChar === undefined) {
        return 1;
      } else {
        if (_sourceChar === _targetChar) {
          return compareCharCode(_source, _target, index + 1);
        } else if (_sourceChar < _targetChar) {
          return -1;
        } else {
          return 1;
        }
      }
    }

    return compareCharCode(source, target, 0);
  };

  console.assert('foo'.localeCompare02('foo') === 'foo'.localeCompare('foo'));
  console.assert('foo'.localeCompare02('bar') === 'foo'.localeCompare('bar'));
  console.assert('foo'.localeCompare02('jav') === 'foo'.localeCompare('jav'));
})();
