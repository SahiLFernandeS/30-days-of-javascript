"use strict";

var filter = function (arr, fn) {
  let filterArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      continue;
    }
    let returned = fn(arr[i], i);
    if (returned !== undefined) filterArr.push(returned);
    // else if (returned === 0) {
    //   filterArr.push(returned);
    // }
  }
  return filterArr;
};

var greaterThan10 = (n) => {
  if (n > 10) {
    return n;
  }
};

var firstIndex = (n, i) => {
  if (i === 0) {
    return n;
  }
};

var plusOne = (n) => {
  return n + 1;
};

// var arr = [0, 10, 20, 30];
// var newArr = filter(arr, greaterThan10);
// console.log(newArr);
// var arr = [1, 2, 3];
// var newArr = filter(arr, firstIndex);
// console.log(newArr);
var arr = [-2, -1, 0, 1, 2];
var newArr = filter(arr, plusOne);
console.log(newArr);
