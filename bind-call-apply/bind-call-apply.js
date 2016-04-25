/**
 * Examples of .bind, .call, .apply.
 *
 * Tutorial: 
 * http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/
 */


// ------ .bind()
var data = [
  {
    name:'Samantha', 
    age:12
  },
  {
    name:'Alexis', 
    age:14
  }
];

var user = {
  data :[
    {
      name: 'T. Woods', 
      age:37
    },
    {
      name:'P. Mickelson', 
      age:43
    }
  ],
  showData:function (event) {
    var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1​
    console.log(this.data[randomNum]);
  }
};

var newHandler = user.showData;
var otherNewHandler = newHandler.bind(data);
/*
  No idead why it does not pick up the latest data
 */
// otherNewHandler();
var cars = {
  data : [
    {name:"Honda Accord", age:14},
    {name:"Tesla Model S", age:2}
  ]
};

cars.showData = user.showData;
// cars.showData();

function greet (gender, age, name) {
  var salutation = gender === 'male' ? 'Mr.' : 'Mrs.'
  if (age > 25) {
    return 'Hello, ' + salutation + name
  } else {
    return 'Whatup ' + name;
  }
}

// Currying
var greetYoungion = greet.bind(null,'male', 24, 'Jimmy Jones Bonny');
// console.log(greetYoungion());
var oldFart = greet.bind(null, 'other');
// console.log(oldFart(92, 'happyy mc happyface'));

// ----- apply()
GLOBAL.avgScore = 'global avgScore';

GLOBAL.avg = function (arrayOfScores) {
  var sumOfScores = arrayOfScores.reduce (function (prev, cur, index, array) {
    return prev + cur;
  });

  this.avgScore = sumOfScores/arrayOfScores.length;
}

var gameController = {
  scores : [11, 22, 33 , 44],
  avgScore : null
};

GLOBAL.avg(gameController.scores)

// console.log(GLOBAL.avgScore);
// console.log(gameController.avgScore);

GLOBAL.avgScore = 'global avgScore';
GLOBAL.avg.call(gameController, gameController.scores);

// console.log(GLOBAL.avgScore);
// console.log(gameController.avgScore);
/*
  Note: the first parameter sets the `this` value. The second parameter is used
  to pass as arguments to the avg function. Then it gets called.

  Think of it as binidng the object that is passed in.
 */

var clientData = {
  id: 094545,
  fullName: "Not Set",
  // setUserName is a method on the clientData object​
  setUserName: function (firstName, lastName)  {
  // this refers to the fullName property in this object​
  this.fullName = firstName + ' ' + lastName;
  }
};

function getUserInput (fname, lname, cb, cbObject) {
  /*
    Note: apply(setThisProp, [arrayOfArgsToExec])
   */
  cb.apply(cbObject, [fname, lname]);
}

// getUserInput('Jimmy', 'mchappyface', clientData.setUserName, clientData);

console.log(clientData.fullName);

/*
  IMPORTANT NOTE: `arguments` is a scope function that reads any function 
  input as a array,
 */

function transitionTo (name) {
  console.log(arguments);
  /*
    Here, we borrow the slice function from the array and bind it to the 
    array function.
   */
  var args = Array.prototype.slice.call(arguments, 1);
  // var args = arguments.slice(1);
  // console.log(typeof(arguments));

  console.log(args);
}

transitionTo("contact", "Today", "20"); 