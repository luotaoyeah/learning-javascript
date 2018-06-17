/*
 * Example 9-23. ECMAScript 5 properties utilities
 */

(function() {
  "use strict";

  /*
   * 在 Object.prototype 上定义一个 properties() 方法，
   * 该方法返回一个对象，该对象包含 4 个方法：toString(), descriptors(), hide(), freeze()；
   */
  console.log("\n-------------------------------------------------- 01");

  /**
   * 对象的属性描述对象
   * @param obj 对象
   * @param names 属性
   * @constructor
   */
  function Properties(obj, names) {
    this.obj = obj;
    this.names = names;
  }

  /**
   * 获取属性列表；
   *     如果参数为空，表示获取所有 own properties；
   *     如果只有一个参数，且其为数组，则它的每一个元素表示一个属性；
   *     否则每个参数表示一个属性；
   * @return {Properties} 对象的属性描述对象
   */
  function properties() {
    var names = [];

    if (arguments.length === 0) {
      names = Object.getOwnPropertyNames(this);
    } else if (arguments.length === 1 && Array.isArray(arguments[0])) {
      names = arguments[0];
    } else {
      names = Array.prototype.splice.apply(arguments, 0);
    }

    return new Properties(this, names);
  }

  Object.defineProperty(Object.prototype, "properties", {
    value: properties,
    writable: true,
    enumerable: false,
    configurable: true
  });

  /**
   * make the properties non-enumerable；
   */
  Properties.prototype.hide = function() {
    const _this = this;
    _this.names.forEach(function(name) {
      if (_this.obj.hasOwnProperty(name)) {
        Object.defineProperty(_this.obj, name, {
          enumerable: false
        });
      }
    });

    return this;
  };

  /**
   * make the properties non-writable and non-configurable；
   */
  Properties.prototype.freeze = function() {
    const _this = this;
    _this.names.forEach(function(name) {
      if (_this.obj.hasOwnProperty(name)) {
        Object.defineProperty(_this.obj, name, {
          writable: false,
          configurable: false
        });
      }
    });

    return this;
  };

  /**
   * 返回一个 property 到 property descriptor 的映射对象；
   */
  Properties.prototype.descriptors = function() {
    const _this = this;
    var descriptors = {};

    _this.names.forEach(function(name) {
      if (_this.obj.hasOwnProperty(name)) {
        descriptors[name] = Object.getOwnPropertyDescriptor(_this.obj, name);
      }
    });

    return descriptors;
  };

  Properties.prototype.toString = function() {
    const _this = this;

    /**
     *
     * @param name
     * @return {string}
     */
    function nameToString(name) {
      var str = "\t";
      var descriptor = Object.getOwnPropertyDescriptor(_this.obj, name);

      if (!descriptor) {
        return "nonexistent " + name + ": undefined";
      }

      if (!descriptor.configurable) {
        str += "permanent ";
      }

      if ((descriptor.get && !descriptor.set) || !descriptor.writable) {
        str += "readonly ";
      }

      if (!descriptor.enumerable) {
        str += "hidden ";
      }

      if (descriptor.get || descriptor.set) {
        str += "accessor " + name;
      } else {
        str +=
          name + ": " + (typeof descriptor.value === "function")
            ? "function"
            : descriptor.value;
      }

      return str;
    }

    return "{\n" + _this.names.map(nameToString).join(",\n") + "\n}";
  };

  Properties.prototype.properties().hide();
})();
