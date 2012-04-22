// accessor-properties

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // accessor property 有四个 attribute:
  //   1. configurable
  //   2. enumerable
  //   3. get
  //   4. set

  var obj = {
    firstName: 'tao',
    lastName: 'luo',
  };

  Object.defineProperty(obj, 'chineseName', {
    enumerable: true,
    configurable: true,
    get: function () {
      return this.lastName + ' ' + this.firstName;
    },
    set: function (value) {
      if (typeof value !== 'string') {
        return;
      }

      var nameSegments = value.split(' ');
      if (nameSegments.length === 2) {
        this.lastName = nameSegments[0];
        this.firstName = nameSegments[1];
      }
    },
  });

  console.assert(obj.chineseName === 'luo tao');

  obj.chineseName = 'tom cat';
  console.assert(obj.firstName === 'cat');
  console.assert(obj.lastName === 'tom');
})();
