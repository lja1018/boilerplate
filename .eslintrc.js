module.exports = {
  extends: [
    'tui',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'plugin:storybook/recommended',
  ],
  plugins: ['prettier', 'jest'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    'jest/globals': true,
  },
};
