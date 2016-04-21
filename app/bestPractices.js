exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
  globals : function() {
    myObjectNotGlobal = {
      name : 'Jory'
    };

    return myObjectNotGlobal;
  },

  functions : function(flag) {
    if (flag) {
      function getValue() { return 'a'; }
    } else {
      function getValue() { return 'b'; }
    }

    return getValue();
  },

  parseInt : function(num) {

    /**
     * Notes: 
     *
     * The seocond parameter is the _radix_ (Mathimatical system). To be safe, 
     * it is always good to default to 10 toi avoid confusion. For Best
     * practicies 
     */

    return parseInt(num, 10);
  },

  identity : function(val1, val2) {
    return val1 === val2;
  }
};
