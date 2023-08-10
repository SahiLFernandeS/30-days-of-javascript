"use strict";

var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

// var args = [];
var args = [{}, null, 42];

const f = createHelloWorld();
console.log(f(args));
