const { bind, on } = require("../dist/index.cjs");

const isNotEqual = bind("isNotEqual", (arg1, arg2) => {
  if (arg1 !== arg2) console.log("Values are not equal!");	
});

on("isNotEqual", function () {
  console.log(`isNotEqual has been called with arguments: ${Array.from(arguments)}`);
});

isNotEqual(1, 2);
