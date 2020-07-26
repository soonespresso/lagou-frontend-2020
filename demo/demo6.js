(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
      (factory());
}(this, (function () {
  'use strict';

  /**
   * @this {MyPromise}
   */
  function finallyConstructor(callback) {
    var constructor = this.constructor;
    return this.then(
      function (value) {
        // @ts-ignore
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      },
      function (reason) {
        // @ts-ignore
        return constructor.resolve(callback()).then(function () {
          // @ts-ignore
          return constructor.reject(reason);
        });
      }
    );
  }

  // Store setTimeout reference so MyPromise-polyfill will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var setTimeoutFunc = setTimeout;

  function isArray(x) {
    return Boolean(x && typeof x.length !== 'undefined');
  }

  function noop() { }

  // Polyfill for Function.prototype.bind
  function bind(fn, thisArg) {
    return function () {
      fn.apply(thisArg, arguments);
    };
  }

  /**
   * @constructor
   * @param {Function} fn
   */
  function MyPromise(fn) {
    if (!(this instanceof MyPromise))
      throw new TypeError('MyPromises must be constructed via new');
    if (typeof fn !== 'function') throw new TypeError('not a function');
    /** @type {!number} */
    this._state = 0;
    /** @type {!boolean} */
    this._handled = false;
    /** @type {MyPromise|undefined} */
    this._value = undefined;
    /** @type {!Array<!Function>} */
    this._deferreds = [];

    doResolve(fn, this);
  }

  function handle(self, deferred) {
    while (self._state === 3) {
      self = self._value;
    }
    if (self._state === 0) {
      self._deferreds.push(deferred);
      return;
    }
    self._handled = true;
    MyPromise._immediateFn(function () {
      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
      if (cb === null) {
        (self._state === 1 ? resolve : reject)(deferred.MyPromise, self._value);
        return;
      }
      var ret;
      try {
        ret = cb(self._value);
      } catch (e) {
        reject(deferred.MyPromise, e);
        return;
      }
      resolve(deferred.MyPromise, ret);
    });
  }

  function resolve(self, newValue) {
    console.log('resolve');
    try {
      // MyPromise Resolution Procedure: https://github.com/MyPromises-aplus/MyPromises-spec#the-MyPromise-resolution-procedure
      if (newValue === self)
        throw new TypeError('A MyPromise cannot be resolved with itself.');
      if (
        newValue &&
        (typeof newValue === 'object' || typeof newValue === 'function')
      ) {
        console.log(newValue);
        var then = newValue.then;
        if (newValue instanceof MyPromise) {
          self._state = 3;
          self._value = newValue;
          finale(self);
          return;
        } else if (typeof then === 'function') {
          doResolve(bind(then, newValue), self);
          return;
        }
      }
      self._state = 1;
      self._value = newValue;
      finale(self);
    } catch (e) {
      reject(self, e);
    }
  }

  function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
  }

  function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
      MyPromise._immediateFn(function () {
        if (!self._handled) {
          MyPromise._unhandledRejectionFn(self._value);
        }
      });
    }

    for (var i = 0, len = self._deferreds.length; i < len; i++) {
      handle(self, self._deferreds[i]);
    }
    self._deferreds = null;
  }

  /**
   * @constructor
   */
  function Handler(onFulfilled, onRejected, MyPromise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.MyPromise = MyPromise;
  }

  /**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */
  function doResolve(fn, self) {
    var done = false;
    try {
      fn(
        function (value) {
          if (done) return;
          done = true;
          resolve(self, value);
        },
        function (reason) {
          if (done) return;
          done = true;
          reject(self, reason);
        }
      );
    } catch (ex) {
      if (done) return;
      done = true;
      reject(self, ex);
    }
  }

  MyPromise.prototype['catch'] = function (onRejected) {
    return this.then(null, onRejected);
  };

  MyPromise.prototype.then = function (onFulfilled, onRejected) {
    // @ts-ignore
    var prom = new this.constructor(noop);

    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
  };

  MyPromise.prototype['finally'] = finallyConstructor;

  MyPromise.all = function (arr) {
    return new MyPromise(function (resolve, reject) {
      if (!isArray(arr)) {
        return reject(new TypeError('MyPromise.all accepts an array'));
      }

      var args = Array.prototype.slice.call(arr);
      if (args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
        try {
          if (val && (typeof val === 'object' || typeof val === 'function')) {
            var then = val.then;
            if (typeof then === 'function') {
              then.call(
                val,
                function (val) {
                  res(i, val);
                },
                reject
              );
              return;
            }
          }
          args[i] = val;
          if (--remaining === 0) {
            resolve(args);
          }
        } catch (ex) {
          reject(ex);
        }
      }

      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };

  MyPromise.resolve = function (value) {
    if (value && typeof value === 'object' && value.constructor === MyPromise) {
      return value;
    }

    return new MyPromise(function (resolve) {
      resolve(value);
    });
  };

  MyPromise.reject = function (value) {
    return new MyPromise(function (resolve, reject) {
      reject(value);
    });
  };

  MyPromise.race = function (arr) {
    return new MyPromise(function (resolve, reject) {
      if (!isArray(arr)) {
        return reject(new TypeError('MyPromise.race accepts an array'));
      }

      for (var i = 0, len = arr.length; i < len; i++) {
        MyPromise.resolve(arr[i]).then(resolve, reject);
      }
    });
  };

  // Use polyfill for setImmediate for performance gains
  MyPromise._immediateFn =
    // @ts-ignore
    (typeof setImmediate === 'function' &&
      function (fn) {
        // @ts-ignore
        setImmediate(fn);
      }) ||
    function (fn) {
      setTimeoutFunc(fn, 0);
    };

  MyPromise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) {
      console.warn('Possible Unhandled MyPromise Rejection:', err); // eslint-disable-line no-console
    }
  };

  /** @suppress {undefinedVars} */
  var globalNS = (function () {
    // the only reliable means to get the global object is
    // `Function('return this')()`
    // However, this causes CSP violations in Chrome apps.
    if (typeof self !== 'undefined') {
      return self;
    }
    if (typeof window !== 'undefined') {
      return window;
    }
    if (typeof global !== 'undefined') {
      return global;
    }
    throw new Error('unable to locate global object');
  })();

  if (!('MyPromise' in globalNS)) {
    globalNS['MyPromise'] = MyPromise;
  } else if (!globalNS.MyPromise.prototype['finally']) {
    globalNS.MyPromise.prototype['finally'] = finallyConstructor;
  }

})));


new MyPromise((resolve, reject) => {
  console.log('MyPromiseA start');
  resolve(MyPromise.resolve());
}).then(() => {
  console.log('MyPromiseA - 1');
}).then(() => {
  console.log('MyPromiseA - 2');
}).then(() => {
  console.log('MyPromiseA - 3');
}).then(() => {
  console.log('MyPromiseA - 4');
}).then(() => {
  console.log('MyPromiseA - 5');
});

new MyPromise((resolve) => {
  console.log('MyPromiseB start');
  resolve();
}).then(() => {
  console.log('MyPromiseB - 1');
}).then(() => {
  console.log('MyPromiseB - 2');
}).then(() => {
  console.log('MyPromiseB - 3');
}).then(() => {
  console.log('MyPromiseB - 4');
}).then(() => {
  console.log('MyPromiseB - 5');
});