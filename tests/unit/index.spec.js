import * as helpers from '../../src/'

describe('toHaveRouteName', () => {
  const expectedHelpers = [
    'mockRouterComponents',
    'mockStoreActionsAndGetters',
    'toHaveRouteName',
    'toHaveBeenNthCalledWithPayload',
    'toHaveBeenLastCalledWithPayload'
  ]

  it('should export all helpers', () => {
    const result = Object.keys(helpers)

    expect(result).toEqual(expectedHelpers)
  })
})
