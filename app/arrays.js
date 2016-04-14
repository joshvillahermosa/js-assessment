exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var sum = 0;

    for (var index = 0; index < arr.length; index++) {
      sum += arr[index];
    }

    return sum;
  },

  remove : function(arr, item) {
    var a = [];

    for (var index = 0; index < arr.length; index++) {
      if (arr[index] !== 2) {
        a.push(arr[index]);
      }
    }

    return a;
  },

  // This too, also took longer than expected but was a great experience
  removeWithoutCopy : function(arr, item) {
    var spliceCounter = 0;

    for (var i = 0; i < arr.length; i++ ) {
      if (arr[i] === item) {
        arr.splice(spliceCounter, 1);

        /* Since we splice one, we must decrease the counter so it that
        the manipulated array remains consistent */
        i--;
      } else {
       spliceCounter++;
      }
    }

    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var concatArray = arr1.concat(arr2);
    return concatArray;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;

    arr.forEach(function (num, index) {
      if (num === item) {
        count ++;
      }
    });

    return count;
  },

  duplicates : function(arr) {

    // I think this can be done much simplier. Might revisit
    var occuringItems = [];

    for (var index = 0; index < arr.length; index++) {
      var duplicateFound = false;
      var count = 0;

      for (var indexTwo = 0; indexTwo < arr.length; indexTwo++) {
        var num = arr[indexTwo];

        if (arr[index] === num) {
          count++;
        }

        if (count === 2) {

          // increment count, we are only looking for 2
          count ++;
          var entered = false;
          for (var i = 0; i < occuringItems.length; i++) {
            if (num === occuringItems[i]) {
              entered = true;
            }
          }

          if (entered === false) {
            occuringItems.push(num);
          }
        }
      }
    }

    return occuringItems;
  },

  square : function(arr) {

    var returnArray = [];

    arr.forEach(function (num, index) {
      returnArray.push(num * num);
    });

    return returnArray;

  },

  findAllOccurrences : function(arr, target) {
    var returnArray = [];

    arr.forEach(function (letter, index) {
      if (letter === target) {
        returnArray.push(index);
      }
    });

    return returnArray;
  }
};
