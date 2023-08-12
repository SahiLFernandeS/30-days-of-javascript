"use strict";

var reduce = function (nums, fn, init) {
  //   let newArr = [];
  if (nums.length === 0) {
    return init;
  }
  for (let i = 0; i < nums.length; i++) {
    let fnreturn = fn(init, nums[i]);
    // newArr.push(fnreturn);
    init = fnreturn;
  }
  return init;
};

// var sum = (accum, curr) => {
//   return accum + curr;
// };

var nums = [1, 2, 3, 4];
var f = reduce(
  nums,
  (accum, curr) => {
    return accum + curr;
  },
  0
);
console.log(f);
var nums = [1, 2, 3, 4];
var f = reduce(
  nums,
  (accum, curr) => {
    return accum + curr * curr;
  },
  100
);
console.log(f);
var nums = [];
var f = reduce(
  nums,
  (accum, curr) => {
    return 0;
  },
  25
);
console.log(f);
