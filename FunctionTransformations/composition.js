"use strict";

var compose = function (functions) {
  return function (x) {
    for (let i = functions.length - 1; i >= 0; i--) {
      x = functions[i](x);
    }
    console.log(x);
  };
};

// const fn = compose([(x) => x + 1, (x) => 2 * x]);
// fn(4); // 9
// const fn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
// fn(4); // 65
// const fn = compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x]);
// fn(1); // 1000
const fn = compose([]);
fn(42); // 42
