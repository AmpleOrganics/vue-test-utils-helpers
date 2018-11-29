"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockStoreMutations = mockStoreMutations;

function mockStoreMutations(_ref) {
  var modulesDictionary = _ref.modules,
      jestFn = _ref.jestFn;
  var mutationsDictionary = {};
  Object.keys(modulesDictionary).forEach(function (moduleKey) {
    var moduleValue = modulesDictionary[moduleKey];
    var isNamespaced = Object.keys(moduleValue).includes('namespaced');

    if (moduleValue.mutations) {
      Object.keys(moduleValue.mutations).forEach(function (key) {
        var mockMutationKey = isNamespaced ? "".concat(moduleKey, "/").concat(key) : key;
        var mockFn = jestFn();
        mutationsDictionary[mockMutationKey] = mockFn;
        moduleValue.mutations[key] = mockFn;
      });
    }
  });
  return {
    mutations: mutationsDictionary
  };
}