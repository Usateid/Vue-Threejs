/* global process */

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    'plugin:vue/recommended',
  ],
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'comma-dangle': 'off',
    'no-case-declarations': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/no-v-html': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off',
    'vue/attributes-order': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'vue/name-property-casing': ['error', 'kebab-case'],
    'vue/require-component-is': 'off',
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
    // 'max-len': ['error', { code: 160 }],
    'keyword-spacing': 'off',
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'arrow-parens': ['error', 'as-needed'],
    'linebreak-style': 0
  }
}
