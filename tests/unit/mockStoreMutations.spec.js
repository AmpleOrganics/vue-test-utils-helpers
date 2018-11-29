import { mockStoreMutations } from '../../src/mockStoreMutations'

describe('mockStoreActionsAndGetters', () => {
  const jestFn = () => {}

  const modules = {
    todos: {
      namespaced: true,
      mutations: {
        NAMESPACED_MUTATION () {}
      }
    },
    users: {
      mutations: {
        REGULAR_MUTATION () {}
      }
    },
    noMutationsModule: {}
  }

  it('should mock store mutations', () => {
    const expectedMutations = {
      'REGULAR_MUTATION': jestFn(),
      'todos/NAMESPACED_MUTATION': jestFn()
    }

    const { mutations } = mockStoreMutations({
      modules,
      jestFn
    })

    expect(mutations).toEqual(expectedMutations)
  })
})
