# Vue Test Helpers
Helper functions that make unit testing easier for vue components.

## Vue-router mocking helpers
### mockRouterComponents
Mocks all components in routes array and makes them available for assertion.

`mockRouterComponents(routes)`

`expect(wrapper.vm.$route.name).toBe('home')`

### toHaveRouteName
Jest matcher that matches vue-test-utils `Wrapper` route with the expected route.
`expect(wrapper).toHaveRouteName('home')`

---
## Vuex store actions and getters mocking helper
### mockStoreActionsAndGetters
Mocks Vuex store `actions` and `getters` 

`const { actions, getters } = mockStoreActionsAndGetters({ modules, mockedGetters: {}, jestFn: jest.fn })`

`expect(actions.someAction).toHaveBeenCalled()`
`expect(getters.someGetter).toHaveBeenCalled()`
