"use strict";

const fibonacci = (maxValue = 350) => {
  const sequence = [0, 1];  
  while (sequence[sequence.length - 1] <= maxValue) {
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  }

  return sequence;
};

const isFibonacci = (num) => fibonacci().includes(num);

module.exports = {
  fibonacci,
  isFibonacci,
};
