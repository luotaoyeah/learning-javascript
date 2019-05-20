/*
 * Example 9-19. Property descriptor utilities
 */

/*
 *
 */
console.log("\n-------------------------------------------------- 01");

/**
 * 设置属性为 non-writable 和 non-configurable 的；
 * @param obj
 */
function freezeProps(obj) {
  /*
   * 如果没有指定属性, 则冻结所有属性；
   * 否则冻结指定的属性；
   */
  const props =
    arguments.length === 1
      ? Object.getOwnPropertyNames(obj)
      : Array.prototype.slice.call(arguments, 1);

  props.forEach(function(prop) {
    if (!Object.getOwnPropertyDescriptor(obj, prop).configurable) {
      return;
    }
    Object.defineProperty(obj, prop, {
      writable: false,
      configurable: false
    });
  });

  return obj;
}

/**
 * 设置属性为 non-enumerable 的；
 * @param obj
 */
function hideProps(obj) {
  const props =
    arguments.length === 1
      ? Object.getOwnPropertyNames(obj)
      : Array.prototype.slice.call(arguments, 1);

  props.forEach(function(prop) {
    if (!Object.getOwnPropertyDescriptor(obj, prop).configurable) {
      return;
    }
    Object.defineProperty(obj, prop, {
      enumerable: false
    });

    return obj;
  });
}

export { freezeProps, hideProps };
