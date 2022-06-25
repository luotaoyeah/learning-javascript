describe('src/book/es6-for-humans/04/06/01/02.test.js', function () {
    it('01', function () {
        class C01 {
            // 先执行
            x = this.fn01();

            constructor() {
                // 后执行
                this.x = this.fn02();
            }

            fn01() {
                console.log('fn01');
                return 1;
            }

            fn02() {
                console.log('fn02');
                return 2;
            }
        }

        expect(new C01().x).toEqual(2);
    });
});
