import globals from 'globals';
import baseConfig from './base.js';
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  ...baseConfig,
  {
    name: 'Globals',
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    name: 'Prettier',
    ...pluginPrettierRecommended,
  },
];
