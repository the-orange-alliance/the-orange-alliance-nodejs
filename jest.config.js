module.exports = {
  roots: ["<rootDir>/tests"],
  testPathIgnorePatterns: ["<rootDir>/tests/util"],
  testMatch: [
    "**/tests/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest"
  }
};
