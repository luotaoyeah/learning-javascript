/*
 * Example 8-2. Using functions as data
 */

(function() {
  /*
   *
   */
  console.log("\n-------------------------------------------------- 01");

  function add(x, y) {
    return x + y;
  }

  function subtract(x, y) {
    return x - y;
  }

  function multiply(x, y) {
    return x * y;
  }

  function devide(x, y) {
    return x / y;
  }

  function operate(operator, operand01, operand02) {
    return operator(operand01, operand02);
  }

  /* ( 2 + 3 ) - ( 4 * 5 ) = -15 */
  console.log(
    "( 2 + 3 ) - ( 4 * 5 ) =",
    operate(subtract, operate(add, 2, 3), operate(multiply, 4, 5))
  );
})();

(function() {
  /*
   *
   */
  console.log("\n-------------------------------------------------- 02");

  const operators = {
    add: function(x, y) {
      return x + y;
    },
    subtract: function(x, y) {
      return x - y;
    },
    multiply: function(x, y) {
      return x * y;
    },
    devide: function(x, y) {
      return x / y;
    }
  };

  function operate(operation, operand01, operand02) {
    if (typeof operators[operation] === "function") {
      return operators[operation](operand01, operand02);
    } else {
      throw new Error("unknow operator");
    }
  }

  /* ( 2 + 3 ) - ( 4 * 5 ) = -15 */
  console.log(
    "( 2 + 3 ) - ( 4 * 5 ) =",
    operate("subtract", operate("add", 2, 3), operate("multiply", 4, 5))
  );
})();
