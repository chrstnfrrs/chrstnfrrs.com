<template>
  <main class="references-page">
    <h1>chrstnfrrs technical references</h1>

    <input v-model="search" />
    <p v-if="search">Showing results for: {{ search }}</p>

    <NuxtLink
      v-for="reference in data"
      :key="reference._path"
      :to="reference._path"
    >
      <h2>{{ reference.title }}</h2>
      <p>{{ reference.description }}</p>
      <div style="display: flex; gap: 0.5rem">
        <div v-for="tag in selectTags(reference)" :key="tag">
          {{ tag }}
        </div>
      </div>
    </NuxtLink>
  </main>
</template>

<script setup>
const route = useRoute();
const path = route.path;
const search = ref('');
const { data } = await useAsyncData(
  `${path}-${search.value}`,
  () =>
    queryContent('/references')
      .where({
        title: {
          $contains: search.value,
        },
      })
      .find(),
  {
    watch: [search],
  },
);

const selectTags = (reference) => reference.tags.replace(/\s/g, '').split(',');
</script>

<style>
.references-page {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: fit-content;
  margin: 0 auto;
}
</style>
