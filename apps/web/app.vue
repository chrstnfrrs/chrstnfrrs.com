<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: 'en',
  },
});
</script>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
  /* background: #0f0f0f;
  color: #fff; */
  background: #f5f5f5;
  color: #101010;
}
pre {
  background: #0e141a;
  border: 1px solid #fff;
  max-width: 512px;
  padding: 0 1rem;
  border-radius: 1rem 0.5rem 1rem 0.5rem;
  white-space: pre-wrap;
}
code {
  background: #0e141a;
  padding: 0.125rem;
  color: #fff;
  border-radius: 0.125rem;
}
.nuxt-content-doc {
  margin: 0 auto;
}
.nuxt-content-doc h1,
h2,
h3,
h4,
h5,
h6,
p,
pre {
  margin-bottom: 0.5rem;
}
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
</style>
