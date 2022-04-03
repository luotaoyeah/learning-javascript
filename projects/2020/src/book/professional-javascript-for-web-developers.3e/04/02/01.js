// execution-context-and-scope

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // execution context 关联一个 variable object,
  // variable object 上定义了该 context 可以访问的变量和函数,
  // variable object 串起来组成 scope chain,
  // 下层的 context 可以访问 scope chain 中所有上层的 context 中的变量和函数

  var color = 'blue';

  function changeColor() {
    console.assert(color === 'blue');
  }

  changeColor();

  // 上面的代码生成的 execution context object 大致如下,
  // 在 executionContextObj4ChangeColor.activationObject 上找不到 color 变量,
  // 就会顺着 scopeChain 找到 executionContextObj4Global.variableObject.color 变量

  var variableObject4Global = {
    color: undefined,
    changeColor: null,
  };
  var executionContextObj4Global = {
    variableObject: variableObject4Global,
    scopeChain: [variableObject4Global],
  };

  var activationObject4ChangeColor = { arguments: { length: 0 } };
  var executionContextObj4ChangeColor = {
    activationObject: activationObject4ChangeColor,
    scopeChain: [activationObject4ChangeColor, variableObject4Global],
  };
})();

(function () {
  // ----------------------------------------------------------------------------------------------------

  var color = 'blue';

  function changeColor() {
    var anotherColor = 'red';

    function swapColors() {
      var tempColor = anotherColor;
      anotherColor = color;
      color = tempColor;
    }

    swapColors();
  }

  changeColor();

  // 上面的代码生成的 execution context object 大致如下:

  var variableObject4Global = {
    color: undefined,
    changeColor: null,
  };
  var executionContextObject4Global = {
    variableObject: variableObject4Global,
    scopeChain: [variableObject4Global],
  };

  var activationObject4ChangeColor = {
    anotherColor: undefined,
    arguments: { length: 0 },
  };
  var executionContextObject4ChangeColor = {
    activationObject: activationObject4ChangeColor,
    scopeChain: [activationObject4ChangeColor, variableObject4Global],
  };

  var activationObject4SwapColors = {
    tempColor: undefined,
    arguments: { length: 0 },
  };
  var executionContextObject4SwapColors = {
    activationObject: activationObject4SwapColors,
    scopeChain: [activationObject4SwapColors, activationObject4ChangeColor, variableObject4Global],
  };
})();

(function () {
  // ----------------------------------------------------------------------------------------------------

  var GlobalExectionContext = {
    LexicalEnvironment: {
      EnvironmentRecord: {
        Type: 'Object',
      },
      outer: '<null>',
      this: '<global object>',
    },
  };

  var FunctionExectionContext = {
    LexicalEnvironment: {
      EnvironmentRecord: {
        Type: 'Declarative',
        Arguments: { length: 0 },
      },
      outer: '<Global or outer function environment reference>',
      this: '<depends on how function is called>',
    },
    VariableEnvironment: {
      EnvironmentRecord: {
        Type: 'Declarative',
      },
      outer: '<GlobalLexicalEnvironment>',
      ThisBinding: '<Global Object or undefined>',
    },
  };
})();
