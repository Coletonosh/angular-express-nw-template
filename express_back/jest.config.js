module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: '../coverage/back',
  coverageProvider: 'v8',
  collectCoverageFrom: [
    './**/*.{ts,js}',
    '!./**/*.d.ts',
  ],
  coverageReporters: ['text', 'lcov'],
  coveragePathIgnorePatterns: [
    "/jest.config.js"
  ],
  testMatch: ['**/?(*.)+(spec|test).ts'],
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.spec.json'
    },
  },
};
