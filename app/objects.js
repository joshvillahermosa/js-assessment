exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {

    // Simplified Answer
    obj.sayIt = fn;

    return obj.sayIt();
  },

  alterObjects : function(constructor, greeting) {

    // Simplified Answer
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    var returnArray = [];

    var objectProperties = Object.getOwnPropertyNames(obj);

    for(var index = 0; index < objectProperties.length; index++) {
      returnArray[index] = objectProperties[index] + ': ' + obj[objectProperties[index]];
    }

    return returnArray;
  }
};
