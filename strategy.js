class Person {
  constructor (whatIs) {
    this.whatIs = whatIs;
  };

  read (number) { return this.whatIs(number); };
};

const binary = {
  aware (number) { return Number("0b" + number); },
  oblivious (number) { return number; }
};

module.exports = { Person, binary };
