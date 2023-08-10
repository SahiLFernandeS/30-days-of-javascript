"use strict";

var createCounter = function (init) {
  var initNum = init;
  function increment() {
    return (init += 1);
  }
  function decrement() {
    return (init -= 1);
  }

  function reset() {
    init = initNum;
    return init;
  }

  return { increment, decrement, reset };
};

const counter = createCounter(10);
console.log(counter.increment());
console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.decrement());
console.log(counter.reset());
