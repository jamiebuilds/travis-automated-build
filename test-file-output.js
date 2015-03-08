"use strict";

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Person = (function () {
  function Person() {
    var _ref = arguments[0] === undefined ? {} : arguments[0];

    var firstName = _ref.firstName;
    var lastName = _ref.lastName;
    var jobTitle = _ref.jobTitle;

    _classCallCheck(this, Person);

    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
  }

  Person.prototype.sayHello = function sayHello() {
    return "Hi! My name is " + this.firstName + " " + this.lastName + " and I am a " + this.jobTitle;
  };

  return Person;
})();

var Developer = (function (_Person) {
  function Developer(firstName, lastName) {
    _classCallCheck(this, Developer);

    _Person.call(this, {
      firstName: firstName,
      lastName: lastName,
      jobTitle: "Developer"
    });
  }

  _inherits(Developer, _Person);

  return Developer;
})(Person);

var jamesKyle = new Developer({
  firstName: "James",
  lastName: "Kyle"
});

jamesKyle.sayHello();
