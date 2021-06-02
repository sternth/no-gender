const { join } = require('path')

/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
module.exports = {
  clearMocks: true,
  // coverageProvider: 'v8',
  setupFilesAfterEnv: [
    join(__dirname, 'tests/chrome.mock.js'),
  ],
  testEnvironment: 'jsdom',
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.js'],
  coverageReporters: ['text', 'html'],
}
