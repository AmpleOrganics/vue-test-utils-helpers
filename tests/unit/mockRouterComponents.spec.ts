import { mockRouterComponents } from '../../src/mockRouterComponents'

describe('mockRouterComponents', () => {
  const routes = [
    {
      path: '/',
      name: 'home',
      component: { template: '<p>home</p>' }
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: { template: '<p>aboutus</p>' }
    },
    {
      path: '/todos',
      component: { template: '<p>todos</p>' },
      children: [
        {
          path: '/details',
          name: 'todo-details',
          component: { template: '<p>todo-details</p>' }
        }
      ]
    }
  ]

  it('should not change original routes', () => {
    const mockedRoutes = mockRouterComponents(routes)

    expect(mockedRoutes === routes).toBe(false)
  })

  it('should replace all route components', () => {
    const dummyComponent = { template: '<p>dummy</p>' }
    const mockedRoutes = mockRouterComponents(routes, dummyComponent)

    expect(mockedRoutes[0].component === dummyComponent).toBe(true)
    expect(mockedRoutes[1].component === dummyComponent).toBe(true)
    expect(mockedRoutes[2].component === dummyComponent).toBe(true)
    expect(mockedRoutes[2].children[0].component).toBe(dummyComponent)
    expect(mockedRoutes[2].children[0].component === dummyComponent).toBe(true)
  })
})
