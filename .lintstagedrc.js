module.exports = {
  // Type check TypeScript files
  '**/*.{ts, tsx}': () => 'pnpm tsc --noEmit',

  // Lint & Prettify TS files
  '**/*.{ts, tsx}': filenames => [
    `pnpm eslint --fix ${filenames.join(' ')}`,
    `pnpm prettier --write ${filenames.join(' ')}`,
  ],

  // Prettify only Markdown and JSON files
  '**/*.{json,md,mdx,yml}': filenames =>
    `pnpm prettier --write ${filenames.join(' ')}`,
}
