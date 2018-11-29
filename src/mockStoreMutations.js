function mockStoreMutations ({
  modules: modulesDictionary,
  jestFn
}) {
  const mutationsDictionary = {}

  Object.keys(modulesDictionary).forEach(moduleKey => {
    const moduleValue = modulesDictionary[moduleKey]
    const isNamespaced = Object.keys(moduleValue).includes('namespaced')

    if (moduleValue.mutations) {
      Object.keys(moduleValue.mutations).forEach(key => {
        const mockMutationKey = isNamespaced ? `${moduleKey}/${key}` : key
        const mockFn = jestFn()
        mutationsDictionary[mockMutationKey] = mockFn
        moduleValue.mutations[key] = mockFn
      })
    }
  })

  return {
    mutations: mutationsDictionary
  }
}

export { mockStoreMutations }
