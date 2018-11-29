import * as helpers from '../../src/'

describe('toHaveRouteName', () => {
  const expectedHelpers = [
    'mockRouterComponents',
    'mockStoreActionsAndGetters',
    'mockStoreMutations',
    'toHaveRouteName',
    'toHaveBeenNthCalledWithPayload',
    'toHaveBeenLastCalledWithPayload',
    'createStubbedComponent'
  ]

  it('should export all helpers', () => {
    const result = Object.keys(helpers)

    expect(result).toEqual(expectedHelpers)
  })
})
