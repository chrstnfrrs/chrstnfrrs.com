<template>
  <main class="nuxt-content-doc">
    <ContentDoc :value="data">
      <template #not-found>
        <strong>No reference found.</strong>
      </template>
      <template #empty>
        <strong>Empty reference.</strong>
      </template>
    </ContentDoc>
  </main>
</template>

<script setup>
const route = useRoute();
const path = route.path;
console.log('nested path', path);
const { data } = await useAsyncData(path, () =>
  queryContent(path).where({ _path: path }).findOne(),
);
</script>
