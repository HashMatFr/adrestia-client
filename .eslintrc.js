module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  parserOptions: {},
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  // add your custom rules here
  rules: {
    'import/first': 'off',
    'prettier/prettier': ['error'],
    'no-console': 'off',
    'import/no-named-as-default-member': 'off',
    'prefer-regex-literals': 'off',
    'array-callback-return': 'off',
  },
  globals: { _: true },
  ignorePatterns: ['**/__test__/**/*.js'],
  plugins: ['vitest'],
}
