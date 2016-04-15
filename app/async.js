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

  // Let's make this fancy
  manipulateRemoteData : function(url) {

    // Helper functions
    var getPeople = function (data) {
      if (data.people) {
        return data.people;
      }
    };

    var extractNames = function (data) {
      var names = [];

      data.map(function (obj, index) {

        if (obj.name) {
          names[index] = obj.name;
        }
      });

      return names;
    };

    /**
     * I'll be honest this one took me a while
     */
    return new Promise(function (resolve, reject) {
      var returnData = [];

      try {

        var httpRequest = new XMLHttpRequest();

        httpRequest.onreadystatechange = function () {

          // Gah, keep on forgetting this line
          if (httpRequest.readyState === 4 && httpRequest.status === 200) {

            // Parse data
            var data = JSON.parse(httpRequest.response);

            // Return only people
            returnData = getPeople(data);

            // Extract names
            returnData = extractNames(returnData);

            // Sort according to test
            returnData = returnData.sort();
            console.log(returnData);

            resolve(returnData);

          }
        };

        httpRequest.open('GET', 'http://localhost:4444/' + url, true);
        httpRequest.send();

      } catch(e) {
        reject(e);
      }
    });

  }
};
