describe('src/book/you-dont-know-js/es6-beyond/07-meta-programming/reflect-api/reflect-api.test.js', () => {
  /*----------------------------------------------------------------------------------------------------
   * 类似 Math 对象，Reflect 包含多个静态方法，
   * 其中有些方法跟 Object 上的同名方法功能类似，但具体实现上有区别，
   * Reflect 的方法跟 Proxy 的 handler 方法一一对应，Proxy 每个 handler 的默认实现就是直接调用对应的 Reflect 方法，
   *----------------------------------------------------------------------------------------------------*/

  it('should work 01', () => {
    const obj = { prop01: 666, [Symbol()]: 888 };
    Reflect.defineProperty(obj, 'prop02', { value: 999, enumerable: false });
    expect(Reflect.ownKeys(obj)).toEqual([...Object.getOwnPropertyNames(obj), ...Object.getOwnPropertySymbols(obj)]);
  });

  /*----------------------------------------------------------------------------------------------------
   * Reflect.has() 等价于 in 操作符，
   *----------------------------------------------------------------------------------------------------*/
  it('should work 02', () => {
    const obj01 = { prop01: 666 };
    const obj02 = { prop02: 888, [Symbol()]: 999 };
    Object.setPrototypeOf(obj02, obj01);

    expect(Reflect.has(obj02, 'prop01')).toBeTruthy();
    expect(Reflect.has(obj02, 'prop02')).toBeTruthy();
    expect('prop01' in obj02).toBeTruthy();
    expect('prop02' in obj02).toBeTruthy();
  });

  /*----------------------------------------------------------------------------------------------------
   * Reflect.apply() 用来调用方法，
   *----------------------------------------------------------------------------------------------------*/
  it('should work 03', () => {
    const fn01 = (x, y) => {
      return x + y;
    };

    expect(Reflect.apply(fn01, null, [1, 2])).toBe(3);
  });

  /*----------------------------------------------------------------------------------------------------
   * Reflect.construct() 用来调用构造函数，等价于 new 操作符，
   *----------------------------------------------------------------------------------------------------*/
  it('should work 04', () => {
    class C01 {
      name;

      constructor(name) {
        this.name = name;
      }
    }

    expect(Reflect.construct(C01, ['luotao']).name).toBe('luotao');
  });

  /*----------------------------------------------------------------------------------------------------
   * Reflect.get() 用来访问对象属性，
   *----------------------------------------------------------------------------------------------------*/
  it('should work 05', () => {
    const obj = { prop01: 666 };
    expect(obj['prop01']).toBe(666);
    expect(Reflect.get(obj, 'prop01')).toBe(666);
  });

  /*----------------------------------------------------------------------------------------------------
   * Reflect.set() 用来添加/修改属性值，
   *----------------------------------------------------------------------------------------------------*/
  it('should work 06', () => {
    const obj = { prop01: 666 };

    expect(Reflect.get(obj, 'prop01')).toBe(666);
    Reflect.set(obj, 'prop01', 888);
    expect(Reflect.get(obj, 'prop01')).toBe(888);

    expect(Reflect.get(obj, 'prop02')).toBeUndefined();
    Reflect.set(obj, 'prop02', 999);
    expect(Reflect.get(obj, 'prop02')).toBe(999);
  });

  /*----------------------------------------------------------------------------------------------------
   * Reflect.deleteProperty() 等价于 delete 操作符，
   *----------------------------------------------------------------------------------------------------*/
  it('should work 07', () => {
    const obj = { prop01: 666 };
    expect(Reflect.has(obj, 'prop01')).toBeTruthy();
    Reflect.deleteProperty(obj, 'prop01');
    expect(Reflect.has(obj, 'prop01')).toBeFalsy();
  });
});
