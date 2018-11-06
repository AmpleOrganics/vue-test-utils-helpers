import { toHaveRouteName } from '../../src/toHaveRouteName'

describe('toHaveRouteName', () => {
    const routeName = 'route-name'
    const wrapper = {
        vm: {
           $route: {
               name: routeName
           }
        }
    }

    it('should set pass to true when expected matches with Vue component route name', () => {
        const result = toHaveRouteName(wrapper, routeName)

        expect(result.pass).toBe(true)
        expect(result.message()).toBe('expected "route-name" not to be "route-name"')
    })

    it('should set pass to false when expected does not matches with Vue component route name', () => {
        const result = toHaveRouteName(wrapper, 'noroute')
        
        expect(result.pass).toBe(false)
        expect(result.message()).toBe('expected "route-name" to be "noroute"')
    })

    it('should throw exception when $route is not initialized in Vue component', () => {
        expect(() => toHaveRouteName(null, '')).toThrow()
        expect(() => toHaveRouteName({}, '')).toThrow()
        expect(() => toHaveRouteName({ vm: {} }, '')).toThrow()
        expect(() => toHaveRouteName({ vm: { $route: {} } }, '')).toThrow()        
        expect(() => toHaveRouteName({ vm: { $route: { name: '' } } }, '')).not.toThrow()        
    })
})