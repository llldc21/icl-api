module.exports = {
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: [
      '<rootDir>/**/(services|strategy|decorators)/**/*.ts',
      '!**/container/**/*.ts',
  ],
  clearMocks: true,
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  coverageReporters: ['text-summary', 'lcov'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/dist/', '/node_modules/'],
  globals: {
      'ts-jest': {
          diagnostics: false,
      },
  },
  coverageThreshold: {
      global: {
          statements: 60,
          branches: 50,
          functions: 60,
          lines: 60,
      },
  },
};