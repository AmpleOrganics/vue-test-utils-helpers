import cloneDeep from 'lodash.clonedeep'

function mockRouterComponents(routes, dummyComponent = { template: '<p>Foo</p>' }) {
  const routesToClear = cloneDeep(routes)
  routesToClear.forEach(route => {
    route.component = dummyComponent
    if (route.children && route.children.length) {
      route.children = mockRouterComponents(route.children, dummyComponent)
    }
  })
  return routesToClear
}

export { mockRouterComponents }