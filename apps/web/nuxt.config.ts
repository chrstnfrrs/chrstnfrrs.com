import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  components: true,
  modules: ['@nuxt/content', '@unocss/nuxt'],
  unocss: {
    attributify: true,
  },
  content: {
    highlight: {
      theme: 'css-variables',
      preload: [
        'css',
        'docker',
        'go',
        'graphql',
        'handlebars',
        'hbs',
        'html',
        'javascript',
        'js',
        'json',
        'jsx',
        'make',
        'makefile',
        'markdown',
        'md',
        'mdx',
        'prisma',
        'rust',
        'sass',
        'scss',
        'zsh',
        'sql',
        'svelte',
        'tsx',
        'typescript',
        'ts',
        'vue-html',
        'vue',
        'yaml',
      ],
    },
  },
});
