describe('src/book/es6-for-humans/11/01/04/asynchronous-functions.js', () => {
  it('01', (cb) => {
    async function getSomething() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('2');
          resolve();
          cb();
        }, 1000);
      });
    }
    async function fn01() {
      console.log('1');
      await getSomething();
    }

    console.log('0');
    fn01().then(() => {});
    console.log('3');
  });
});
