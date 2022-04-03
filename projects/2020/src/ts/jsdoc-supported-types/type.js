// @type {T}
// 标注变量的类型为 T, T 可以是:
//   1. 原始类型(number/string/boolean/null/undefined/symbol)
//   2. ts 类型定义中的类型, 全局的或者是引入的
//   3. 通过 @typedef 定义的类型

// --------------------------------------------------
{
  /** @type {string} */
  let v1;

  /** @type {Window}  */
  let v2;

  /** @type {Promise<string>} */
  let v3;
}

// --------------------------------------------------
// union type
{
  /** @type {string | number} */
  let v1;
}

// --------------------------------------------------
// array
{
  /** @type {number[]} */
  let v1;

  /** @type {Array<number>} */
  let v2;
}

// --------------------------------------------------
// object literal
{
  /** @type {{ x: number, y: string }} */
  let v1;
}

// --------------------------------------------------
// index signature
{
  /** @type {{ [p: number]: string }} */
  let v1;
}

// --------------------------------------------------
// function
{
  /** @type {(x: number, y: boolean) => string} */
  let v1;

  /** @type {Function} */
  let v2;
}

// --------------------------------------------------
// 实现类型转换
{
  /** @type {number | string} */
  let v1 = Math.random() < 0.5 ? 1 : '1';

  let v2 = /** @type {number} */ (v1);
}
