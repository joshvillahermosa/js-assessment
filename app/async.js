exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {

    return new Promise(function (resolve, reject) {
      try {
        resolve(value);
      } catch(e) {
        reject(e);
      }
    });
  },

  manipulateRemoteData : function(url) {

  }
};
