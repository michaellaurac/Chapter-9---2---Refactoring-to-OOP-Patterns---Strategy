class Person {
  constructor (whatIs) {
    this.whatIs = whatIs;
  };

  read (number) { return this.whatIs(number); };
};

module.exports = Person;
