module.exports = {
  extends: [
    "@commitlint/config-conventional",
  ],
  plugins: ["commitlint-plugin-function-rules"],
  rules: {
    "function-rules/type-enum": [
      2,
      "always",
      (parsed) => {
        const headerRegex = /^(\w*)(\(([A-Z]{2,8}-[0-9]+)\))?:(.+)$/g;
        return parsed.header.match(headerRegex)
          ? [true]
          : [
              false,
              `Type must either have a jira ticket or be empty e.g: "chore: something" or chore(red-123): something`,
            ];
      },
    ],
  },
};
