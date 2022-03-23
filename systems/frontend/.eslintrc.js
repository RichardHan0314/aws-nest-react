module.exports = {
  extends: ['@busybox'],
  overrides: [
    {
      env: {
        'cypress/globals': true,
      },
      extends: ['plugin:cypress/recommended'],
      files: ['src/**/*.spec.js'],
      rules: {
        'cypress/no-pause': 'error',
      },
    },
  ],
  rules: {
    'import/no-default-export': ['off'],
    'import/prefer-default-export': ['error'],
  },
};
