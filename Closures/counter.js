"use strict";

var createCounter = function (n) {
  return function () {
    return n++;
  };
};

var n = -2;

const counter = createCounter(n);
console.log(counter());
console.log(counter());
console.log(counter());
