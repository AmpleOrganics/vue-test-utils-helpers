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
                todos: state => state.todos,
                archivedTodos: state => todos,
            },
            actions: {
                getTodos() {
                    return Promise.resolve(['todo1', 'todo2'])
                }
            }
        },
        users: {
            state: {
                users: []
            },
            getters: {
                users: state => state.users,
            },
            actions: {
                getUsers() {
                    return Promise.resolve([])
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
            'todos/getTodos': jestFn().mockResolvedValue()
        }
        const expectedGetters = {
            'users': mockResolvedValue,
            'todos/todos': mockResolvedValue,
            'todos/archivedTodos': foo            
        }

        const { actions, getters } = mockStoreActionsAndGetters({
            modules,
            mockedGetters,
            jestFn
        })

        expect(actions).toMatchObject(expectedActions)
        expect(getters).toMatchObject(expectedGetters)
    })
})