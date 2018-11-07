"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockStoreActionsAndGetters = mockStoreActionsAndGetters;

function mockStoreActionsAndGetters(_ref) {
  var modulesDictionary = _ref.modules,
      mockedGetters = _ref.mockedGetters,
      jestFn = _ref.jestFn;
  var actionsDictionary = {};
  var gettersDictionary = {};
  Object.keys(modulesDictionary).forEach(function (moduleKey) {
    var moduleValue = modulesDictionary[moduleKey];
    var isNamespaced = Object.keys(moduleValue).includes('namespaced');
    Object.keys(moduleValue.actions).forEach(function (key) {
      var mockActionKey = isNamespaced ? "".concat(moduleKey, "/").concat(key) : key;
      var mockFn = jestFn().mockResolvedValue({});
      actionsDictionary[mockActionKey] = mockFn;
      moduleValue.actions[key] = mockFn;
    });
    Object.keys(moduleValue.getters).forEach(function (key) {
      var mockedGetterKey = isNamespaced ? "".concat(moduleKey, "/").concat(key) : key;
      var mockFn = jestFn(); // use custom mock functions when available

      if (Object.keys(mockedGetters).includes(mockedGetterKey)) {
        mockFn = mockedGetters[mockedGetterKey];
      }

      gettersDictionary[mockedGetterKey] = mockFn;
      moduleValue.getters[key] = mockFn;
    });
  });
  return {
    actions: actionsDictionary,
    getters: gettersDictionary
  };
}