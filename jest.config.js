module.exports = {
  roots: ["<rootDir>/tests"],
  testPathIgnorePatterns: ["<rootDir>/tests/util/"],
  testMatch: [
    "**/tests/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  collectCoverage: true,
  coveragePathIgnorePatterns: ["<rootDir>/tests/util/"],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest"
  }
};
