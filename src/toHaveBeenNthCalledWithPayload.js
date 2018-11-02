function toHaveBeenNthCalledWithPayload(actions, expected, index = 0) {
    const parsedValue = JSON.stringify(actions.mock.calls[index][1])
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

export { toHaveBeenNthCalledWithPayload }