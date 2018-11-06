"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHaveRouteName = toHaveRouteName;

function toHaveRouteName(wrapper, expected) {
  if (!wrapper || !wrapper.vm || !wrapper.vm.$route || !Object.keys(wrapper.vm.$route).includes('name')) {
    throw new Error('wrapper $route is not initialized');
  }

  var parsedValue = JSON.stringify(wrapper.vm.$route.name);
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