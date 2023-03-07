# Lint your conventional commits with jira tickets

## @commitlint/config-conversational-with-ticket-subjects

Extension on @commitlint/config-conventional, to add ticket numbers in subjects

feat(red-123): something, or feat: something will be valid.

Shareable `commitlint` config enforcing [conventional commits](https://conventionalcommits.org/).
Use with [@commitlint/cli](https://npm.im/@commitlint/cli) and [@commitlint/prompt-cli](https://npm.im/@commitlint/prompt-cli).

![Demonstration](preview.gif)

## Getting started

### NPM
```sh
npm install --save-dev git@gitlab.itservices.lan:nasc/red/config-conversational-with-ticket-subjects.git
npx husky install
echo "module.exports = {extends: ['@commitlint/config-conversational-with-ticket-subjects']};" > commitlint.config.js
npx husky set .husky/commit-msg 'npx commitlint --edit $1'
```

### Yarn
```sh
yarn add --dev ssh://git@gitlab.itservices.lan:nasc/red/config-conversational-with-ticket-subjects.git
yarn run husky install
echo "module.exports = {extends: ['@commitlint/config-conversational-with-ticket-subjects']};" > commitlint.config.js
yarn run husky set .husky/commit-msg 'npx commitlint --edit $1'
```