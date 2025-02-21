// jest.config.js

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  modulePathIgnorePatterns: [
    "/e2e/",
    "/tests-examples/"
  ],
  moduleNameMapper: {
    /* Handle CSS imports (with CSS modules)
    https://jestjs.io/docs/webpack#mocking-css-modules */
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    /* Handle image imports
    https://jestjs.io/docs/webpack#handling-static-assets */
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$':
      '<rootDir>/__mocks__/fileMock.js',
    '^@/components(.*)$': '<rootDir>/components/$1',
    '^@/lib(.*)$': '<rootDir>/lib/$1',
    '^@/app(.*)$': '<rootDir>/app/$1',
    '^@/models(.*)$': '<rootDir>/models/$1',
    '^@/__mocks__(.*)$': '<rootDir>/__mocks__/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      'babel-jest',
      {
        presets: [
          ['next/babel', { "preset-react": { runtime: "automatic" } }]
        ]
      }
    ],
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(lucide-react)/)', // Exclude lucide-react from being ignored
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  
}
