module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  moduleFileExtensions: [
    'ts',
    'js'
  ],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|ts)|**/__tests__/*.(js|ts)'
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'html'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
}
