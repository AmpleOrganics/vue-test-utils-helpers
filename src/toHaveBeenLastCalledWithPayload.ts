import { toHaveBeenNthCalledWithPayload } from './toHaveBeenNthCalledWithPayload'

function toHaveBeenLastCalledWithPayload (actions, expected) {
  const lastIndex = actions.mock.calls.length - 1
  return toHaveBeenNthCalledWithPayload(actions, expected, lastIndex)
}

export { toHaveBeenLastCalledWithPayload }
