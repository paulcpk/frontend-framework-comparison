module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier',
  ],
  ignoreFiles: ['tests/**/*.*'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {},
}
