import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
// @ts-expect-error Missing types
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginTestingLibrary from 'eslint-plugin-testing-library';
import baseConfig from './base.js';

export default [
  ...baseConfig,
  {
    name: 'Globals',
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },
  {
    name: 'React Recommended',
    ...pluginReact.configs.flat!.recommended,
  },
  {
    name: 'React JSX Runtime',
    ...pluginReact.configs.flat!['jsx-runtime'],
  },
  {
    name: 'React Hooks',
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
    },
  },
  {
    name: 'React Settings',
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    name: 'React Testing Library',
    files: ['**/*.{test,spec}.{ts,tsx,mts}'],
    ...pluginTestingLibrary.configs['flat/react'],
  },
];
