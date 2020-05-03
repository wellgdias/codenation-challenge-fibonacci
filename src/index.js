"use strict";

const fibonacci = (maxValue = 350) => {
  const sequence = [0, 1];
  let nextSequence;  
  while (sequence[sequence.length - 1] <= maxValue) {
    nextSequence = sequence[sequence.length - 1] + sequence[sequence.length - 2]
    sequence.push(nextSequence);
  }

  return sequence;
};

const isFibonacci = (num) => fibonacci().includes(num);

module.exports = {
  fibonacci,
  isFibonacci,
};
