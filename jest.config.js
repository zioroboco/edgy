module.exports = {
  preset: "ts-jest",
  testRunner: "jest-circus/runner",
  testMatch: ["**/*.spec.ts"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.base.json",
    },
  },
}
