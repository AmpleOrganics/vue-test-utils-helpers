# Vue Test Utils Helpers
Helper functions that make unit testing easier for VueJs applications.

## Install

add one of the following to the devDependencies of your `package.json`:

```
"vue-test-utils-helpers": "git+ssh://git@github.com/AmpleOrganics/vue-test-utils-helpers.git#1.0.3"
```
or
```
"vue-test-utils-helpers": "git+https://github.com/AmpleOrganics/vue-test-utils-helpers.git#1.0.3"
```

note: replace 1.0.3 with whatever version you want to install, or leave it blank to always have the latest

and run

`npm i` or `yarn` to install the package

## Vue-router mocking helpers
### mockRouterComponents
Mocks all components in routes array and makes them available for assertion.

```javascript
mockRouterComponents(routes)

expect(wrapper.vm.$route.name).toBe('home')
```

### toHaveRouteName
Jest matcher that matches vue-test-utils `Wrapper` route with the expected route.

```javascript
expect(wrapper).toHaveRouteName('home')
```

---
## Vuex store actions and getters mocking helper
### mockStoreActionsAndGetters
Mocks Vuex store `actions` and `getters`

```javascript
const { actions, getters } = mockStoreActionsAndGetters({ modules, mockedGetters: {}, jestFn: jest.fn })

expect(actions.someAction).toHaveBeenCalled()
expect(getters.someGetter).toHaveBeenCalled()
```

### toHaveBeenLastCalledWithPayload
Jest matcher that matches the payload of last call to a mocked function with the expected payload. Makes it easier to assert on mocked store action.

```javascript
expect(actions.someAction).toHaveBeenLastCalledWithPayload(expected)
```

### toHaveBeenLastCalledWithPayload
Jest matcher is similar to `toHaveBeenLastCalledWithPayload` and allows you to pick the index for the call.

```javascript
expect(actions.someAction).toHaveBeenNthCalledWithPayload(expected, index)
```

---

## Stub components
Create stubbed component using `createStubbedComponent` that can be used with `mount` method in vue-test-utils.

```javascript
const component = createStubbedComponent()

const component = createStubbedComponent({ slots: ['default', 'slot1'] })

const component = createStubbedComponent({ events: ['emit1', 'emit2'] })

const component = createStubbedComponent({
    events: {
    emit1: 'foo',
    emit2: { foo: 'bar' },
    emit3: null
    }
})
```

```javascript
/*
vue-test-utils - emit event from stubbed component so that component under test can react to emitted event
*/
const wrapper = mount(Component, {
    stubs: {
        'StubbedComponent': createStubbedComponent({
            events: ['emit1']
        })
    }
})

wrapper.find('.stubbed-component-selector').trigger('emit1')
expect(<wrapper behviour on handling event emit1>).toBe(<expected>)
```
