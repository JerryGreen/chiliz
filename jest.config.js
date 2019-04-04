module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  browser: true,
  // rootDir: './src',
  roots: [
    '<rootDir>',
    'src'
  ],
  setupFiles: ['<rootDir>/tests/setupTests.tsx'],
  // testURL: 'http://localhost/',
  // testEnvironment: 'jsdom',
  // testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleDirectories: [
    'node_modules',
    'src'
  ],
  transform: {
    // '^.+\\.tsx?$': 'ts-jest'
    '\\.tsx?$': 'ts-jest'
  },
  modulePaths: [
    '<rootDir>/node_modules',
    '<rootDir>/src'
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/lambda',
    '<rootDir>/docs',
    '<rootDir>/public',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/mocks/fileMock.tsx',
    '\\.(css|less)$': '<rootDir>/tests/mocks/styleMock.tsx',
    '^~/(.*)$': '<rootDir>/src/$1',
  }
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
}
