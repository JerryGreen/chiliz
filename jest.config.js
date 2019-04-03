module.exports = {
  preset: 'ts-jest',
  // setupFiles: ['<rootDir>/src/setupTests.js'],
  // testURL: 'http://localhost/',
  testEnvironment: 'jsdom',
  // testEnvironment: 'jsdom',
  // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    // '^.+\\.tsx?$': 'ts-jest'
    '\\.tsx?$': 'ts-jest'
  },
  modulePaths: [
    '<rootDir>/src'
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/lambda',
    '<rootDir>/docs',
    '<rootDir>/public',
  ]
  // modulePathIgnorePatterns: [
  //   '<rootDir>/lambda'
  // ]
  // globals: {
  //   'ts-jest': {
  //     diagnostics: false
  //   }
  // }
  // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$'
  // 'testRegex': '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
};
