exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn(arr[0], arr[1], arr[2]);
  },

  speak : function(fn, obj) {
    /*
      Good Explanation found here:
      http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals
     */
    var newFn = fn.bind(obj);

    return newFn();
  },

  functionFunction : function(str) {
    return function (str2) {
      return str + ', ' + str2;
    }
  },

  makeClosures : function(arr, fn) {
    var arrFn = [];

    for (var arrIndex = 0; arrIndex < arr.length; arrIndex++) {
      arrFn.push(fn.bind(null, arr[arrIndex]));
    }

    return arrFn;

  },

  partial : function(fn, str1, str2) {
    var newFn = fn.bind(null, str1, str2);

    return newFn;
  },

  useArguments : function(a, b, c, d) {
    if (a === undefined) {
      return false;
    }

    if (b === undefined && c === undefined && d === undefined) {
      return a;
    }

    if ( c === undefined && d === undefined) {
      return a + b;
    }

    if (d === undefined) {
      return a + b + c;
    }

    return a + b + c + d;
  },

  callIt : function(fn, a, b, c) {
    if (c) {
      return fn(a,b,c);
    } else {
      return fn(a,b);
    }
  },

  partialUsingArguments : function(fn, a, b, c) {
    if (a && b && c) {
      return fn.bind(null, a, b, c);
    } else if (a && b) {
      return fn.bind(null, a, b);
    } else if (a) {
      return fn.bind(null, a);
    } else {
      return fn;
    }
  },

  curryIt : function(fn) {
    return function (a) {
      return function (b) {
        return function (c) {
          return fn(a,b,c);
        }
      }
    }
  }
};
