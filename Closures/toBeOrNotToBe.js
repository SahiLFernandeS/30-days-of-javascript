"use strict";

var expect = function (val) {
  function toBe(num) {
    if (num === val) {
      return { value: true };
    }
    return { error: "Not Equal" };
  }

  function notToBe(num) {
    if (num !== val) {
      return { value: true };
    }
    return { error: "Equal" };
  }

  return { toBe, notToBe };
};

console.log(expect(5).toBe(6));
console.log(expect(5).notToBe(5));
