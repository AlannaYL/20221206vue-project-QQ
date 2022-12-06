/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'plugin:vue-pug/vue3-recommended',
    'eslint:recommended',
    '@vue/stantard'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-unused-vars': 0,
    'vue/max-attributes-per-line': off
  }
}
