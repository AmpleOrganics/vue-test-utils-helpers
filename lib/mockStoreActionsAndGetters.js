"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockStoreActionsAndGetters = mockStoreActionsAndGetters;

function mockStoreActionsAndGetters({
  modules: modulesDictionary,
  mockedGetters = {},
  jestFn
}) {
  let actionsDictionary = {};
  let gettersDictionary = {};
  Object.keys(modulesDictionary).forEach(moduleKey => {
    const moduleValue = modulesDictionary[moduleKey];
    const isNamespaced = Object.keys(moduleValue).includes('namespaced');
    Object.keys(moduleValue.actions).forEach(key => {
      const mockActionKey = isNamespaced ? `${moduleKey}/${key}` : key;
      const mockFn = jestFn().mockResolvedValue({});
      actionsDictionary[mockActionKey] = mockFn;
      moduleValue.actions[key] = mockFn;
    });
    Object.keys(moduleValue.getters).forEach(key => {
      const mockedGetterKey = isNamespaced ? `${moduleKey}/${key}` : key;
      let mockFn = jestFn(); // use custom mock functions when available

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