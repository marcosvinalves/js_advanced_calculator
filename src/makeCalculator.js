'use strict';

function makeCalculator() {
  const object = {
    result: 0,

    operate(callback, number) {
      callback(number);

      return object;
    },

    reset() {
      object.result = 0;

      return object;
    },

    add(number) {
      object.result += number;
    },

    subtract(number) {
      object.result -= number;
    },

    multiply(number) {
      object.result *= number;
    },

    divide(number) {
      object.result /= number;
    },
  };

  return object;
}

module.exports = makeCalculator;
