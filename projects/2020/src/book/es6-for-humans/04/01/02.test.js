describe('src/book/es6-for-humans/04/01/02.test.js', () => {
    it('01', function () {
        class A {
            name = 'foo';

            // 默认会创建一个无参的构造函数
        }

        class B {
            name = 'foo';

            constructor(name) {
                this.name = name;
            }
        }

        const a = new A();
        expect(a.name).toEqual('foo');

        const b = new B();
        expect(b.name).toEqual(undefined);
    });
});
