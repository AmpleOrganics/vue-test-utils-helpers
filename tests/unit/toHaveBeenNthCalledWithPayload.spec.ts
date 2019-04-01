import { toHaveBeenNthCalledWithPayload } from '../../src/toHaveBeenNthCalledWithPayload'

describe('toHaveBeenNthCalledWithPayload', () => {
  const actions = {
    mock: {
      calls: [
        [null, 'item1'],
        [null, 'item2']
      ]
    }
  }

  it('should set pass to true when expected matches with index payload', () => {
    const resultIndex0 = toHaveBeenNthCalledWithPayload(actions, 'item1', 0)
    const resultIndex1 = toHaveBeenNthCalledWithPayload(actions, 'item2', 1)

    expect(resultIndex0.pass).toBe(true)
    expect(resultIndex1.pass).toBe(true)

    expect(resultIndex0.message()).toBe('expected "item1" not to be "item1"')
    expect(resultIndex1.message()).toBe('expected "item2" not to be "item2"')
  })

  it('should set pass to false when expected matches do not with index payload', () => {
    const resultIndex0 = toHaveBeenNthCalledWithPayload(actions, 'noitem', 0)

    expect(resultIndex0.pass).toBe(false)
    expect(resultIndex0.message()).toBe('expected "item1" to be "noitem"')
  })
})
