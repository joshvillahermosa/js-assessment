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

  },

  useArguments : function() {

  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
