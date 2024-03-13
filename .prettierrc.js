module.exports = {
  arrowParens: 'always',
  overrides: [
    {
      files: ['*.json', '.*rc'],
      options: {
        parser: 'json5',
        quoteProps: 'preserve',
        singleQuote: false,
        trailingComma: 'none',
      },
    },
  ],
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 80,
  requirePragma: false,
  semi: true,
  singleQuote: true,
  tailwindFunctions: ['clsx', 'cva'],
  trailingComma: 'es5',
  useTabs: false,
};
