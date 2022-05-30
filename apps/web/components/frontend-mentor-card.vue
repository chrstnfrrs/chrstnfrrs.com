<template>
  <div class="frontend-mentor-card">
    <div class="frontend-mentor-card__preview-container">
      <iframe
        class="frontend-mentor-card__preview-link"
        :src="repo.homepageUrl"
      />
    </div>
    <h4 class="frontend-mentor-card__title">{{ name }}</h4>
    <div class="row">
      <strong>{{ framework }}</strong>
      <a class="frontend-mentor-card__link" :href="website">Website</a>
      <a class="frontend-mentor-card__link" :href="github">Github</a>
    </div>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  repo: {
    type: Object,
    default: () => ({}),
  },
});

const reactiveProps = toRefs(props);

const name = reactiveProps.repo.value.name.replace(/-/g, ' ');
const website = reactiveProps.repo.value.homepageUrl;
const github = reactiveProps.repo.value.url;
const description = reactiveProps.repo.value.description;
const framework = reactiveProps.repo.value.framework;
</script>

<style>
.row {
  display: flex;
  gap: 0.5rem;
}
.frontend-mentor-card {
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid black;
  width: fit-content;
  max-width: 402px;
}
.frontend-mentor-card__title {
  text-transform: capitalize;
  font-weight: 400;
  padding: 0;
  margin: 0;
}
.frontend-mentor-card__link {
  display: block;
}
.frontend-mentor-card__preview-container {
  /* This container fits the size of the downscaled iframe and hides the excess space */
  height: 216px !important;
  width: 384px !important;
  border-radius: 0.25rem;
  overflow: hidden;
  margin-bottom: 0.5rem;
}
.frontend-mentor-card__preview-link {
  width: 1920px;
  height: 1080px;
  border: none;
  pointer-events: none;
  -webkit-transform: scale(0.2);
  -moz-transform: scale(0.2);
  -ms-transform: scale(0.2);
  transform: scale(0.2);
  -webkit-transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
}
</style>
