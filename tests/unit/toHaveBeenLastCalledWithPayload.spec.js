import { toHaveBeenLastCalledWithPayload } from '../../src/toHaveBeenLastCalledWithPayload'

describe('toHaveBeenLastCalledWithPayload', () => {
    it('should mock store actions and getters', () => {
        const actions = {
            mock: {
                calls: [
                    [null, 'item1'], 
                    [null, 'item2'], 
                ]
            }
        }
        const expected = 'item2'

        const result = toHaveBeenLastCalledWithPayload(actions, expected)
        expect(result.pass).toBeTruthy()
    })
})