module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
         'react-hooks/rules-of-hooks': 'error',
          'react-hooks/exhaustive-deps': 'warn',
          'no-console': 'off',
          'no-unused-vars': 1,
          'no-trailing-spaces': 1,
          'no-multi-spaces': 1,
          'no-multiple-empty-lines': 1,
          'space-before-blocks': ['error', 'always'],
          'object-curly-spacing': [1, 'always'],
          // 'indent': ['warn', 2],
          'linebreak-style': 0,
          'semi': [1, 'never'],
          'quotes': [2, 'single', { 'avoidEscape': true }],
          'react/prop-types': 0,
          'react/display-name': 0,
          'keyword-spacing': 1,
          'comma-dangle': 1,
          'comma-spacing': 1,
          'arrow-spacing': 1
      },
    },
  ],
};
