class Person {
  constructor (knowsBinary) {
    this.knowsBinary = knowsBinary;
  }

  read (number) { return this.whatIs(number); };

  whatIs (number) {
    if (this.knowsBinary) {
      return Number("0b" + number);
    } else {
      return number;
    }
  };
};

module.exports = Person;
