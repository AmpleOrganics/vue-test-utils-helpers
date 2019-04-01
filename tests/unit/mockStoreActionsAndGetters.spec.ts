import { mockStoreActionsAndGetters } from '../../src/mockStoreActionsAndGetters'

describe('mockStoreActionsAndGetters', () => {
  const foo = () => {}
  const mockResolvedValue = { mockResolvedValue: () => foo }
  const jestFn = () => mockResolvedValue

  const modules = {
    todos: {
      namespaced: true,
      state: {
        todos: ['todo1']
      },
      getters: {
        todos: () => {},
        archivedTodos: () => {}
      },
      actions: {
        getTodos () {
          return Promise.resolve(['todo1', 'todo2'])
        }
      }
    },
    users: {
      state: {
        users: []
      },
      getters: {
        users: () => {}
      },
      actions: {
        getUsers () {
          return Promise.resolve([])
        }
      }
    },
    onlyActions: {
      actions: {
        onlyAction () {
          return Promise.resolve([])
        }
      }
    },
    onlyGetters: {
      getters: {
        onlyGetter: () => {}
      }
    },
    parent: {
      namespaced: true,
      getters: {
        parentGetter: () => {}
      },
      actions: {
        parentAction: () => Promise.resolve([])
      },
      modules: {
        child: {
          namespaced: true,
          getters: {
            childGetter: () => {}
          },
          actions: {
            childAction: () => Promise.resolve([])
          }
        },
        nonNamespaced: {
          getters: {
            nonNamespacedGetter: () => {}
          },
          actions: {
            nonNamespacedAction: () => Promise.resolve([])
          }
        }
      }
    }
  }

  it('should mock store actions and getters', () => {
    const mockedGetters = {
      'todos/archivedTodos': foo
    }
    const expectedActions = {
      'getUsers': jestFn().mockResolvedValue(),
      'onlyAction': jestFn().mockResolvedValue(),
      'todos/getTodos': jestFn().mockResolvedValue(),
      'parent/parentAction': jestFn().mockResolvedValue(),
      'parent/child/childAction': jestFn().mockResolvedValue(),
      'parent/nonNamespacedAction': jestFn().mockResolvedValue()
    }
    const expectedGetters = {
      'users': mockResolvedValue,
      'onlyGetter': mockResolvedValue,
      'todos/todos': mockResolvedValue,
      'todos/archivedTodos': foo,
      'parent/parentGetter': mockResolvedValue,
      'parent/child/childGetter': mockResolvedValue,
      'parent/nonNamespacedGetter': mockResolvedValue
    }

    const { actions, getters } = mockStoreActionsAndGetters({
      modules,
      mockedGetters,
      jestFn
    })

    expect(getters).toEqual(expectedGetters)
    expect(actions).toEqual(expectedActions)
  })
})
