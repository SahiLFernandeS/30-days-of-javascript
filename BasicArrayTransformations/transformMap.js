"use strict";

var map = function (arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i], i));
  }
  return newArr;
};

var plusOne = (n) => {
  return n + 1;
};

var plusI = (n, i) => {
  return n + i;
};

var constant = () => {
  return 42;
};

var arr = [1, 2, 3];
var newArr = map(arr, plusOne);
console.log(newArr);
var arr = [1, 2, 3];
var newArr = map(arr, plusI);
console.log(newArr);
var arr = [1, 2, 3];
var newArr = map(arr, constant);
console.log(newArr);
