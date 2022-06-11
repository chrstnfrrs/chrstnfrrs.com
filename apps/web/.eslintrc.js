module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022,
  },
  extends: ['plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index', '[slug]'],
      },
    ],
  },
};
