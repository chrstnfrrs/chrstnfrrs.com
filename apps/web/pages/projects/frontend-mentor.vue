<template>
  <div class="frontend-mentor-projects">
    <FrontendMentorCard v-for="repo in data" :key="repo.id" :repo="repo" />
  </div>
</template>

<script setup>
const { data } = useAsyncData('frontend-mentor-projects-all', () =>
  $fetch('/api/frontend-mentor-projects'),
);

useHead({
  title: 'chrstnfrrs - Frontend Mentor Projects',
  viewport: 'width=device-width, initial-scale=1',
  charset: 'utf-8',
  meta: [
    {
      name: 'description',
      content: 'A collection of completed frontend mentor projects',
    },
  ],
});
</script>

<style scoped>
.frontend-mentor-projects {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  place-items: center;
}
</style>
