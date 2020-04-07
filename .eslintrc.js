module.exports = {
    root: true,
    env: {
      browser: true,
      node: true
    },
    parserOptions: {
      parser: 'babel-eslint'
    },
    extends: [
      'plugin:vue/recommended'
    ],
    // required to lint *.vue files
    plugins: [
      'vue'
    ],
    // add your custom rules here
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'vue/require-component-is': 'off',
    },
    overrides: [
      {
        'files': ['*vue'],
        'rules': {
          'quotes': ['error', 'single', 'avoid-escape'],
          'space-before-function-paren': ['error', 'always'],      
          'semi': ['error', 'never'],
          'vue/no-v-html': 0,
          "vue/component-tags-order": ["error", {
            "order": ["template", "script", "style"]
          }]
        }
      }
    ]
  }
  