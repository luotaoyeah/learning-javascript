/*----------------------------------------------------------------------------------------------------
 * 使用 import 引入其他 module 输出的数据，from 后面表示 module 的路径，
 *----------------------------------------------------------------------------------------------------*/
import { bar, foo } from './importing.01';

/*----------------------------------------------------------------------------------------------------
 * 在当前 module 中定义的变量，不能跟引入的变量重名，
 *----------------------------------------------------------------------------------------------------*/
// identifier 'foo' has already been declared
// const foo = '999';

describe('src/book/es6-for-humans/05-modules/05-importing/importing.js', () => {
  it('01', () => {
    expect(foo).toEqual(666);
    expect(bar).toEqual('888');
  });
});
