import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  {
    name: 'Prettier',
    ...eslintPluginPrettierRecommended,
  },
  {
    name: 'Build Artifacts',
    ignores: [
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      '**/node_modules/**',
      '**/storybook-static/**',
    ],
  },
  {
    name: '@eslint/js',
    ...eslint.configs.recommended,
  },
  tseslint.configs.recommended
);
