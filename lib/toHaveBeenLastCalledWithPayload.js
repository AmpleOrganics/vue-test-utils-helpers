"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHaveBeenLastCalledWithPayload = toHaveBeenLastCalledWithPayload;

var _toHaveBeenNthCalledWithPayload = require("./toHaveBeenNthCalledWithPayload");

function toHaveBeenLastCalledWithPayload(actions, expected) {
  var lastIndex = actions.mock.calls.length - 1;
  return (0, _toHaveBeenNthCalledWithPayload.toHaveBeenNthCalledWithPayload)(actions, expected, lastIndex);
}