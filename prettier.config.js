module.exports = {
  overrides: [
    {
      files: ['.prettierrc', '.huskyrc', '.lintstagedrc'],
      options: {
        parser: 'json',
      },
    },
  ],
  printWidth: 160,
  singleQuote: true,
  trailingComma: 'all',
};
