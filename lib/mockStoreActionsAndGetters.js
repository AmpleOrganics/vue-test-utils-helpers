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
    mockStoreActions(moduleKey, moduleValue, actionsDictionary, isNamespaced, jestFn);
    mockStoreGetters(moduleKey, moduleValue, gettersDictionary, isNamespaced, jestFn, mockedGetters);

    if (moduleValue.modules) {
      var results = mockStoreActionsAndGetters({
        modules: moduleValue.modules,
        mockedGetters: mockedGetters,
        jestFn: jestFn
      });
      Object.keys(results.actions).forEach(function (actionKey) {
        actionsDictionary["".concat(moduleKey, "/").concat(actionKey)] = results.actions[actionKey];
      });
      Object.keys(results.getters).forEach(function (getterKey) {
        gettersDictionary["".concat(moduleKey, "/").concat(getterKey)] = results.getters[getterKey];
      });
    }
  });
  return {
    actions: actionsDictionary,
    getters: gettersDictionary
  };
}

function mockStoreActions(moduleKey, moduleValue, actionsDictionary, isNamespaced, jestFn) {
  if (moduleValue.actions) {
    Object.keys(moduleValue.actions).forEach(function (key) {
      var mockActionKey = isNamespaced ? "".concat(moduleKey, "/").concat(key) : key;
      var mockFn = jestFn().mockResolvedValue({});
      actionsDictionary[mockActionKey] = mockFn;
      moduleValue.actions[key] = mockFn;
    });
  }
}

function mockStoreGetters(moduleKey, moduleValue, gettersDictionary, isNamespaced, jestFn, mockedGetters) {
  if (moduleValue.getters) {
    Object.keys(moduleValue.getters).forEach(function (key) {
      var mockedGetterKey = isNamespaced ? "".concat(moduleKey, "/").concat(key) : key;
      var mockFn = jestFn(); // use custom mock functions when available

      if (Object.keys(mockedGetters).includes(mockedGetterKey)) {
        mockFn = mockedGetters[mockedGetterKey];
      }

      gettersDictionary[mockedGetterKey] = mockFn;
      moduleValue.getters[key] = mockFn;
    });
  }
}