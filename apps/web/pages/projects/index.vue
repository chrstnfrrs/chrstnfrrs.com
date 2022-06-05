<template>
  <div>
    <div class="frontend-mentor-projects">
      <h2>Frontend Mentor Projects</h2>
      <div class="projects-grid">
        <FrontendMentorCard v-for="repo in data" :key="repo.id" :repo="repo" />
      </div>
      <NuxtLink :to="'/projects/frontend-mentor'">
        See more Frontend Mentor projects
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { data } = useAsyncData('frontend-mentor-projects-featured', () =>
  $fetch('/api/frontend-mentor-projects', {
    body: {
      featured: true,
    },
  }),
);
</script>

<style>
.projects-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  place-items: center;
}
</style>
