class Person {
  constructor (whatIs) {
    this.whatIs = whatIs;
  };

  read (number) { return this.whatIs(number); };
};

function binaryAware (number) {
  return Number("0b" + number);
}

function binaryOblivious (number) {
  return number;
}

module.exports = { Person, binaryAware, binaryOblivious };
