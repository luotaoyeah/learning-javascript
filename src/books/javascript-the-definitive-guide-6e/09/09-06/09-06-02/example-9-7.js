/*
 * Example 9-7. Enumerated types in JavaScript
 */

import { inherit } from "../../../06/06-01/06-01-04/example-6-1";

/**
 *
 * @param properties
 * @return {enumeration}
 * @constructor
 */
function Enumeration(properties) {
  function enumeration() {
    throw new Error("can not be initialized");
  }

  enumeration.prototype = {
    constructor: enumeration,
    toString: function() {
      return this.name;
    },
    valueOf: function() {
      return this.value;
    },
    toJSON: function() {
      return this.name;
    }
  };

  enumeration.values = [];

  for (var key in properties) {
    const e = inherit(enumeration.prototype);
    e.name = key;
    e.value = properties[key];
    enumeration[key] = e;
    enumeration.values.push(e);
  }

  enumeration.forEach = function(fn, context) {
    for (var i = 0; i < this.values.length; i++) {
      fn.call(context, this.values[i]);
    }
  };

  return enumeration;
}

export { Enumeration };
