"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHaveBeenNthCalledWithPayload = toHaveBeenNthCalledWithPayload;

function toHaveBeenNthCalledWithPayload(actions, expected, index) {
  var parsedValue = JSON.stringify(actions.mock.calls[index][1]);
  var parsedExpected = JSON.stringify(expected);
  var pass = parsedValue === parsedExpected;

  if (pass) {
    return {
      message: function message() {
        return "expected ".concat(parsedValue, " not to be ").concat(parsedExpected);
      },
      pass: true
    };
  } else {
    return {
      message: function message() {
        return "expected ".concat(parsedValue, " to be ").concat(parsedExpected);
      },
      pass: false
    };
  }
}