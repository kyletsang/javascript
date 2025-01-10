import globals from 'globals';
import baseConfig from './base.js';

export default [
  ...baseConfig,
  {
    name: 'Globals',
    languageOptions: {
      globals: globals.node,
    },
  },
];
