exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {

  	// Simplified Answer
  	obj.sayIt = fn;

  	return obj.sayIt();
  },

  alterObjects : function(constructor, greeting) {

  },

  iterate : function(obj) {

  }
};
