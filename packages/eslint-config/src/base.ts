import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
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
  tseslint.configs.recommended,
);
