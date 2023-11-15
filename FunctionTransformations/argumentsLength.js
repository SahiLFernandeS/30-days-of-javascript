"use strict";

var argumentsLength = function (...args) {
  //   let argLength = 0;
  //   for (let i = 0; i < args.length; i++) {
  //     argLength += i;
  //   }
  console.log(args.length);
};

// const argsArr = [5];
const argsArr = [{}, null, "3"];
argumentsLength(...argsArr);
