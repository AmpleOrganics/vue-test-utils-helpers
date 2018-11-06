function toHaveRouteName(wrapper, expected) {
    if (!wrapper || !wrapper.vm || !wrapper.vm.$route || !Object.keys(wrapper.vm.$route).includes('name')) {
        throw new Error('wrapper $route is not initialized')
    }
    const parsedValue = JSON.stringify(wrapper.vm.$route.name)
    const parsedExpected = JSON.stringify(expected)

    const pass = parsedValue === parsedExpected
    if (pass) {
        return {
            message: () =>
                `expected ${parsedValue} not to be ${parsedExpected}`,
            pass: true
        }
    } else {
        return {
            message: () =>
                `expected ${parsedValue} to be ${parsedExpected}`,
            pass: false
        }
    }
}

export { toHaveRouteName }