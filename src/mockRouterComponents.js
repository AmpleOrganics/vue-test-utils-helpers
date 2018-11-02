import cloneDeep from 'lodash.clonedeep'

function mockRouterComponents(routes = []) {
  const routesToClear = cloneDeep(routes)
  routesToClear.forEach(route => {
    route.component = { template: '<p>Foo</p>' }
    if (route.children && route.children.length) {
      mockRouterComponents(route.children)
    }
  })
  return routesToClear
}

export { mockRouterComponents }