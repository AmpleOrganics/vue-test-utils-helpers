function mockStoreActionsAndGetters ({
  modules: modulesDictionary,
  mockedGetters,
  jestFn
}) {
  const actionsDictionary = {}
  const gettersDictionary = {}

  Object.keys(modulesDictionary).forEach(moduleKey => {
    const moduleValue = modulesDictionary[moduleKey]
    const isNamespaced = Object.keys(moduleValue).includes('namespaced')

    mockStoreActions(moduleKey, moduleValue, actionsDictionary, isNamespaced, jestFn)
    mockStoreGetters(moduleKey, moduleValue, gettersDictionary, isNamespaced, jestFn, mockedGetters)
  })

  return {
    actions: actionsDictionary,
    getters: gettersDictionary
  }
}

function mockStoreActions (moduleKey, moduleValue, actionsDictionary, isNamespaced, jestFn) {
  if (moduleValue.actions) {
    Object.keys(moduleValue.actions).forEach(key => {
      const mockActionKey = isNamespaced ? `${moduleKey}/${key}` : key
      const mockFn = jestFn().mockResolvedValue({})
      actionsDictionary[mockActionKey] = mockFn
      moduleValue.actions[key] = mockFn
    })
  }
}

function mockStoreGetters (moduleKey, moduleValue, gettersDictionary, isNamespaced, jestFn, mockedGetters) {
  if (moduleValue.getters) {
    Object.keys(moduleValue.getters).forEach(key => {
      const mockedGetterKey = isNamespaced ? `${moduleKey}/${key}` : key
      let mockFn = jestFn()
      // use custom mock functions when available
      if (Object.keys(mockedGetters).includes(mockedGetterKey)) {
        mockFn = mockedGetters[mockedGetterKey]
      }
      gettersDictionary[mockedGetterKey] = mockFn
      moduleValue.getters[key] = mockFn
    })
  }
}

export { mockStoreActionsAndGetters }
