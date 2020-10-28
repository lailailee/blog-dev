module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-debugger': 'off',
    indent: 'off',
    'space-before-function-paren': 'off',
    curly: 'off'
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ]
}
