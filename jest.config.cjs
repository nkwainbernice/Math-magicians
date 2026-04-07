module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/Test/setupTests.cjs'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
};
