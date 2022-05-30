<template>
  <div class="frontend-mentor-projects">
    <FrontendMentorCard v-for="repo in data" :key="repo.id" :repo="repo" />
  </div>
</template>

<script setup>
const { data } = await useAsyncData('frontend-mentor-projects', () =>
  $fetch('/api/frontend-mentor-projects'),
);
</script>

<style>
.frontend-mentor-projects {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  place-items: center;
}
</style>
