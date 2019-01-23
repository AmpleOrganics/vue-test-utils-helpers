module.exports = {
  clearMocks: true,
  moduleFileExtensions: [
    "js",
  ],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|ts)|**/__tests__/*.(js|ts)'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ['json', 'html'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js, vue}',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
