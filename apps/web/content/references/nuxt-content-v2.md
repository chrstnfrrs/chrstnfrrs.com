---
title: 'Reference: Nuxt Content V2'
description: 'A quick start reference to nuxt content v2'
tags: 'Vue, Nuxt'
---

# Nuxt Content V2

Install Nuxt Content

`yarn add --dev @nuxt/content`{lang="zsh"}

Enable Nuxt Content in `nuxt.config.ts`

```js
import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  // content: {
  // Any custom configuration: https://content.nuxtjs.org/api/configuration
  // }.
});
```

```css
:root {
  --shiki-color-text: #ffffff;
  --shiki-color-background: #0e141a;
  --shiki-token-constant: #44dfff;
  --shiki-token-string: #aaed36;
  --shiki-token-comment: #6e7d9a;
  --shiki-token-keyword: #ff006a;
  --shiki-token-parameter: #44dfff;
  --shiki-token-function: #ff006a;
  --shiki-token-string-expression: #aaed36;
  --shiki-token-punctuation: #ffffff;
  --shiki-token-link: #6e7d9a;
}
```
