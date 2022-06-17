// jest.config.js
module.exports = {
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
    ],
    moduleNameMapper: {
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
        '^.+\\.(css|sass|scss)$': '<rootDir>/jest/mocks/styleMock.js',
        '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/jest/mocks/fileMock.js',
    },
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest/jest.setup.js'],
    transformIgnorePatterns: [
        '/node_modules/',
        '^.+\\.module\\.(css|sass|scss)$',
    ],
    testMatch: ['**/?(*.)+(test).js'],
}
