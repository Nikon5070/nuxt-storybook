module.exports = {
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'block-no-empty': null,
    'color-no-invalid-hex': true,
    'comment-empty-line-before': [
      'always',
      {
        ignore: ['stylelint-commands', 'after-comment']
      }
    ],
    'declaration-colon-space-after': 'always',
    'max-empty-lines': 2
  }
}
