module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    'prettier/vue',
    'plugin:prettier/recommended',
  ],
  plugins: ['vue', 'prettier'],
  rules: {
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/attribute-hyphenation': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true }
    ],
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true
      }
    ],
    'no-var': 2
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
