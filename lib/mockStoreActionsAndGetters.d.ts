declare function mockStoreActionsAndGetters({ modules: modulesDictionary, mockedGetters, jestFn }: {
    modules: any;
    mockedGetters: any;
    jestFn: any;
}): {
    actions: {};
    getters: {};
};
export { mockStoreActionsAndGetters };
