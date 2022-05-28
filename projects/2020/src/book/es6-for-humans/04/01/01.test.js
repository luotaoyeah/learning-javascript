describe('src/book/es6-for-humans/04/01/01.test.js', () => {
    /*
     * class 跟传统的面向对象的语言的 class 不完全一样,
     * 实际上, 它还是一个 function, 底层是通过 prototype 来实现的,
     * 本质上, 它只是一个语法糖
     */
    it('01', function () {
        class Car {
            constructor(brand) {
                this.brand = brand;
            }
        }

        const car = new Car('tesla');
        expect(car.hasOwnProperty('brand')).toBe(true);

        // class 本质上是一个 function
        expect(typeof Car).toEqual('function');
    });
});
